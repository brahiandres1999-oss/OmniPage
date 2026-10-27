import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { translations } from '../src/i18n/translations.ts';

const base = '/OmniPage';
const routes = ['/', '/docs/', '/changelog/'];
const pages = new Map(routes.map(route => [route, readFileSync(join('dist', route, 'index.html'), 'utf8')]));
const attributes = (html, name) => Array.from(html.matchAll(new RegExp(`\\s${name}="([^"]*)"`, 'g')), match => match[1]);

test('all local navigation links resolve, including section anchors', () => {
  for (const [route, html] of pages) {
    for (const href of attributes(html, 'href')) {
      if (!href || /^(https?:|mailto:|tel:|data:)/.test(href)) continue;
      const url = new URL(href, 'https://local.example' + base + route);
      assert.ok(url.pathname.startsWith(base + '/'), `${route}: local URL escapes the site base: ${href}`);
      const target = url.pathname.slice(base.length);
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
      if (!src.startsWith(base + '/')) continue;
      const path = resolve('dist', '.' + src.slice(base.length).split('?')[0]);
      assert.ok(existsSync(path) && statSync(path).size > 0, `${route}: missing source ${src}`);
    }
  }
});
