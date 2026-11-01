import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { translations } from '../src/i18n/translations.ts';

const routes = ['/', '/docs/', '/changelog/'];
const pages = new Map(routes.map(route => [route, readFileSync(join('dist', route, 'index.html'), 'utf8')]));
const attributes = (html, name) => Array.from(html.matchAll(new RegExp(`\\s${name}="([^"]*)"`, 'g')), match => match[1]);

const homeHtml = pages.get('/') || '';
const detectedBase = homeHtml.includes('href="/OmniPage/docs/"') ? '/OmniPage' : '';

test('all local navigation links resolve, including section anchors', () => {
  for (const [route, html] of pages) {
    for (const href of attributes(html, 'href')) {
      if (!href || /^(https?:|mailto:|tel:|data:)/.test(href)) continue;
      const url = new URL(href, 'https://local.example' + detectedBase + route);
      if (detectedBase) {
        assert.ok(url.pathname.startsWith(detectedBase + '/'), `${route}: local URL escapes the site base: ${href}`);
      }
      const target = detectedBase ? url.pathname.slice(detectedBase.length) : url.pathname;
      if (/\.[a-z0-9]+$/i.test(target)) {
        assert.ok(existsSync(join('dist', target)), `${route}: missing asset ${href}`);
        continue;
      }
      const targetRoute = target.endsWith('/') ? target : target + '/';
      const destination = pages.get(targetRoute);
      assert.ok(destination, `${route}: unknown route ${href}`);
      if (url.hash) assert.ok(attributes(destination, 'id').includes(decodeURIComponent(url.hash.slice(1))), `${route}: broken anchor ${href}`);
    }
  }
});

test('rendered translation keys exist in both languages', () => {
  for (const [route, html] of pages) {
    for (const attr of ['data-i18n','data-i18n-aria','data-i18n-title']) {
      for (const key of attributes(html, attr)) {
        for (const lang of ['es','en']) assert.ok(translations[lang][key]?.trim(), `${route}: missing ${lang}/${key}`);
      }
    }
  }
});

test('pages have unique fragment identifiers and one primary heading', () => {
  for (const [route, html] of pages) {
    const ids = attributes(html, 'id');
    assert.equal(new Set(ids).size, ids.length, `${route}: duplicate IDs break navigation and control relationships`);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: expected one h1`);
  }
});

test('every local image, script and video source is present in the build', () => {
  for (const [route, html] of pages) {
    for (const src of [...attributes(html, 'src'),...attributes(html,'poster'),...attributes(html,'data-video-src')]) {
      if (!src.startsWith('/')) continue;
      if (detectedBase && !src.startsWith(detectedBase + '/')) continue;
      const relativeSrc = detectedBase ? src.slice(detectedBase.length) : src;
      const path = resolve('dist', '.' + relativeSrc.split('?')[0]);
      assert.ok(existsSync(path) && statSync(path).size > 0, `${route}: missing source ${src}`);
    }
  }
});

test('landing page includes all 9 official skills in #canvas and agent install/invoke snippets', () => {
  const expectedSkills = [
    'omni-init/',
    'omni-discuss/',
    'omni-specify/',
    'omni-clarify/',
    'omni-plan/',
    'omni-tasks/',
    'omni-audit/',
    'omni-implement/',
    'omni-converge/'
  ];
  for (const skill of expectedSkills) {
    assert.ok(homeHtml.includes(`<span>${skill}</span>`), `Missing ${skill} in #canvas explorer tree`);
  }
  assert.ok(homeHtml.includes('id="agent-install-cmd"'), 'Missing #agent-install-cmd snippet');
  assert.ok(homeHtml.includes('id="agent-invocation"'), 'Missing #agent-invocation snippet');
});

test('changelog renders complete bilingual release notes for v0.8.1', () => {
  const changelogHtml = pages.get('/changelog/') || '';
  assert.ok(changelogHtml.includes('id="v0.8.1"'), 'Missing v0.8.1 entry in changelog');
  assert.ok(changelogHtml.includes('Wordmark Tipográfico Dual-Tone (Spec 024)'), 'Missing v0.8.1 Spanish highlights');
  assert.ok(changelogHtml.includes('Dual-Tone Typographic Wordmark (Spec 024)'), 'Missing v0.8.1 English highlights');
});

test('SEO artifacts (robots.txt, sitemap.xml, og-banner.png and JSON-LD) are emitted and valid', () => {
  assert.ok(existsSync(join('dist', 'robots.txt')), 'Missing dist/robots.txt');
  assert.ok(existsSync(join('dist', 'sitemap.xml')), 'Missing dist/sitemap.xml');
  assert.ok(existsSync(join('dist', 'assets', 'og-banner.png')), 'Missing dist/assets/og-banner.png');

  const robotsTxt = readFileSync(join('dist', 'robots.txt'), 'utf8');
  assert.ok(robotsTxt.includes('Sitemap: '), 'robots.txt must declare Sitemap URL');

  const sitemapXml = readFileSync(join('dist', 'sitemap.xml'), 'utf8');
  assert.ok(sitemapXml.includes('/docs/</loc>'), 'sitemap.xml must include /docs/');
  assert.ok(sitemapXml.includes('/changelog/</loc>'), 'sitemap.xml must include /changelog/');

  assert.ok(homeHtml.includes('/assets/og-banner.png"'), 'og:image must point to og-banner.png');
  assert.ok(homeHtml.includes('"@type":"SoftwareApplication"'), 'Missing SoftwareApplication JSON-LD');
  assert.ok(homeHtml.includes('"@type":"FAQPage"'), 'Missing FAQPage JSON-LD on landing page');
});
