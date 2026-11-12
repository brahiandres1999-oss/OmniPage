import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { translations } from '../src/i18n/translations.ts';

const base = '';
const routes = ['/', '/docs/', '/changelog/'];
const pages = new Map(routes.map(route => [route, readFileSync(join('dist', route, 'index.html'), 'utf8')]));
const attributes = (html, name) => Array.from(html.matchAll(new RegExp(`\\s${name}="([^"]*)"`, 'g')), match => match[1]);

test('all local navigation links resolve, including section anchors', () => {
  for (const [route, html] of pages) {
    for (const href of attributes(html, 'href')) {
      if (!href || /^(https?:|mailto:|tel:|data:)/.test(href)) continue;
      const url = new URL(href, 'https://local.example' + route);
      assert.ok(url.pathname.startsWith('/'), `${route}: local URL escapes the site base: ${href}`);
      const target = url.pathname;
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

test('AC-02: terminal workbench in #canvas renders v0.9.0 without global Enter hijacking', () => {
  const home = pages.get('/');
  assert.ok(home.includes('my-pay-service'), 'terminal canvas must reference realistic project my-pay-service');
  assert.ok(!home.includes('LaboratorioSpringBootBancov2'), 'terminal canvas must not reference old fictitious project');
  assert.ok(home.includes('ascii-blue') && home.includes('ascii-amber'), 'terminal must render dual-tone ASCII logo');
  
  const canvasComponent = readFileSync('src/components/ProductCanvas.astro', 'utf8');
  assert.ok(!canvasComponent.includes("window.addEventListener('keydown'"), 'must not hijack window keydown globally');
});

test('AC-03: #caos-vs-spec renders comparative contrast matrix and 9-skills loop', () => {
  const home = pages.get('/');
  assert.ok(home.includes('comparative-matrix'), 'must render comparative matrix');
  assert.ok(home.includes('data-i18n="value.chaos.badge"'), 'must render chaos badge');
  assert.ok(home.includes('data-i18n="value.spec.badge"'), 'must render spec badge');
  assert.ok(home.includes('data-i18n="value.spec.1.tag"'), 'must render spec memory block');
  assert.ok(home.includes('data-i18n="value.spec.2.tag"'), 'must render spec minimal-touch block');
  assert.ok(home.includes('data-i18n="value.spec.3.tag"'), 'must render spec deterministic verification block');
  assert.ok(home.includes('id="skills-pipeline-diagram"'), 'must render 9-skills pipeline diagram');
});

test('AC-04: #perfiles consolidates 4 architecture profiles and direct semantic ul-li lists', () => {
  const home = pages.get('/');
  assert.ok(!home.includes('data-profile-tab="bpo"'), 'must not contain bpo profile tab');
  assert.ok(!home.includes('data-profile-panel="bpo"'), 'must not contain bpo profile panel');
  for (const prof of ['fintech', 'healthtech', 'ecommerce', 'general']) {
    assert.ok(home.includes(`data-profile-tab="${prof}"`), `must contain ${prof} profile tab`);
    assert.ok(home.includes(`data-profile-panel="${prof}"`), `must contain ${prof} profile panel`);
  }
  const invalidUlDiv = /<ul[^>]*class="[^"]*invariants-list[^"]*"[^>]*>\s*<div/i.test(home);
  assert.equal(invalidUlDiv, false, 'ul.invariants-list must not contain direct div children');
});

test('AC-05: agent selector inputs have explicit id and label-for, navbar language button has accessible name', () => {
  const home = pages.get('/');
  const radioIds = Array.from(home.matchAll(/<input[^>]*type="radio"[^>]*id="([^"]+)"/g), m => m[1]);
  assert.ok(radioIds.length >= 9, 'must have all agent radios with explicit IDs');
  for (const id of radioIds) {
    assert.ok(home.includes(`for="${id}"`), `label must have for="${id}"`);
  }
  const langBtn = home.match(/<button[^>]*id="lang-toggle-btn"[^>]*aria-label="([^"]+)"[^>]*>([^<]+)<\/button>/);
  assert.ok(langBtn, 'must have lang-toggle-btn');
  const [, ariaLabel, visibleText] = langBtn;
  assert.ok(ariaLabel.includes(visibleText.trim()), `aria-label "${ariaLabel}" must contain visible text "${visibleText}" (WCAG 2.5.3)`);
});

test('AC-06: project metadata and documentation URLs consistently reference v0.9.0', () => {
  const docs = pages.get('/docs/');
  assert.ok(docs.includes('tree/v0.9.0/docs'), 'docs source link must point to v0.9.0 tag');
  assert.ok(!docs.includes('tree/v0.8'), 'docs source link must not point to outdated v0.8');
  
  const home = pages.get('/');
  assert.ok(home.includes('0.9.0'), 'landing page must designate 0.9.0 as official release');
});

test('AC-07: #empezar onboarding features safe maintenance commands', () => {
  const home = pages.get('/');
  assert.ok(home.includes('omni-spec doctor'), '#empezar must include omni-spec doctor');
  assert.ok(home.includes('omni-spec update --dry-run'), '#empezar must include omni-spec update --dry-run');
});

test('AC-08: /docs/ subtabs include realistic CLI outputs and mobile nav auto-close', () => {
  const docs = pages.get('/docs/');
  assert.ok(docs.includes('omni-spec blast-radius'), '/docs/ must reference blast-radius');
  assert.ok(docs.includes('omni-spec memory search'), '/docs/ must reference memory search');
  assert.ok(docs.includes('omni-spec guardian check'), '/docs/ must reference guardian check');
  assert.ok(docs.includes('omni-spec mcp'), '/docs/ must reference mcp');
  
  const docsPage = readFileSync('src/pages/docs/index.astro', 'utf8');
  assert.ok(docsPage.includes("menu.open = false"), 'mobile nav must auto-close on link click');
});

test('AC-09: changelog features v0.9.0 as canonical release entry', () => {
  const changelog = pages.get('/changelog/');
  assert.ok(changelog.includes('id="v0.9.0"'), '/changelog/ must contain entry with id="v0.9.0"');
  assert.ok(changelog.includes('v0.9.0</h2>'), '/changelog/ must display v0.9.0 heading');
});

test('AC-10: layout prevents shifts with explicit media dimensions', () => {
  for (const [route, html] of pages) {
    const imgMatches = Array.from(html.matchAll(/<img\s+([^>]+)>/g), m => m[1]);
    for (const attrs of imgMatches) {
      assert.ok(attrs.includes('width=') && attrs.includes('height='), `${route}: img must have explicit width and height: <img ${attrs}>`);
    }
  }
  const home = pages.get('/');
  assert.ok(home.includes('id="ascii-spec-wrap"'), 'hero must contain #ascii-spec-wrap');
});
