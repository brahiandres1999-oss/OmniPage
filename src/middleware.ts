import { defineMiddleware } from 'astro:middleware';
import { load } from 'cheerio';
import { translations } from './i18n/translations';

/** Produces crawlable English HTML during prerendering and in the local dev server. */
export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  if (!context.url.pathname.startsWith('/en/') || !response.headers.get('content-type')?.includes('text/html')) return response;
  const $ = load(await response.text());
  const dict = translations.en;
  $('[data-i18n]').each((_, el) => {
    const key = $(el).attr('data-i18n')!;
    if (dict[key] !== undefined) $(el).text(dict[key]);
  });
  for (const [attribute, data] of [['aria-label', 'data-i18n-aria'], ['title', 'data-i18n-title']]) {
    $(`[${data}]`).each((_, el) => {
      const key = $(el).attr(data)!;
      if (dict[key] !== undefined) $(el).attr(attribute, dict[key]);
    });
  }
  $('[data-locale]').each((_, el) => {
    if ($(el).attr('data-locale') === 'en') $(el).removeAttr('hidden');
    else $(el).attr('hidden', '');
  });
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href')!;
    if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/en/')) $(el).attr('href', '/en' + href);
  });
  $('#lang-toggle-btn').text('ES').attr('aria-label', 'ES - Switch to Spanish');
  $('#theme-toggle-btn').attr('aria-label', 'Use light theme');
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response($.html(), { status: response.status, headers });
});
