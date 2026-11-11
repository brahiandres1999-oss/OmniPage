import { translations, type Language } from '../i18n/translations';

/** Reads an optional saved preference; restricted storage leaves the current page usable. */
export function readPreference(key: string): string | null {
  try { return localStorage.getItem(key); }
  catch { return null; }
}

/** Persists a preference when browser storage is available. The DOM remains authoritative. */
export function savePreference(key: string, value: string): void {
  try { localStorage.setItem(key, value); }
  catch { document.documentElement.dataset.preferences = 'session-only'; }
}

/** Returns the active document language, including when persistent storage is unavailable. */
export function getLanguage(): Language {
  return document.documentElement.lang === 'en' ? 'en' : 'es';
}

/** Applies trusted, bundled interface copy and announces the change to data-driven components. */
export function applyLanguage(lang: Language): void {
  document.documentElement.lang = lang;
  const dict = translations[lang];
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n!];
    if (value !== undefined) el.textContent = value;
  });
  for (const [attribute, data] of [['aria-label', 'data-i18n-aria'], ['title', 'data-i18n-title']] as const) {
    document.querySelectorAll<HTMLElement>('[' + data + ']').forEach((el) => {
      const value = dict[el.getAttribute(data)!];
      if (value !== undefined) el.setAttribute(attribute, value);
    });
  }
  document.querySelectorAll<HTMLElement>('[data-locale]').forEach((el) => {
    el.hidden = el.dataset.locale !== lang;
  });
  const langButton = document.getElementById('lang-toggle-btn');
  if (langButton) {
    langButton.textContent = lang === 'es' ? 'EN' : 'ES';
    langButton.setAttribute('aria-label', lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish');
  }
  const page = document.body;
  const title = page.getAttribute('data-title-' + lang);
  const description = page.getAttribute('data-description-' + lang);
  if (title) {
    document.title = title;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  }
  if (description) {
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }
  updateThemeLabel();
  window.dispatchEvent(new CustomEvent('omni:language-change', { detail: { lang } }));
}

/** Keeps the theme action's accessible name aligned with its current appearance. */
export function updateThemeLabel(): void {
  const dark = document.documentElement.classList.contains('dark');
  const lang = getLanguage();
  document.getElementById('theme-toggle-btn')?.setAttribute('aria-label',
    lang === 'es' ? (dark ? 'Usar tema claro' : 'Usar tema oscuro') : (dark ? 'Use light theme' : 'Use dark theme'));
}

applyLanguage(readPreference('omni-lang') === 'en' ? 'en' : 'es');
document.getElementById('lang-toggle-btn')?.addEventListener('click', () => {
  const lang: Language = getLanguage() === 'es' ? 'en' : 'es';
  savePreference('omni-lang', lang);
  applyLanguage(lang);
});
document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
  const style = document.createElement('style');
  style.textContent = '*,*::before,*::after{transition:none!important}';
  document.head.append(style);
  const dark = document.documentElement.classList.toggle('dark');
  savePreference('omni-theme', dark ? 'dark' : 'light');
  updateThemeLabel();
  void document.body.offsetHeight;
  requestAnimationFrame(() => requestAnimationFrame(() => style.remove()));
});
