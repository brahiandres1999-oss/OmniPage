import { load } from 'cheerio';
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { translations } from '../src/i18n/translations.ts';

const base = '';
const routes = ['/', '/docs/', '/changelog/', '/en/', '/en/docs/', '/en/changelog/'];
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

  const docsPage = readFileSync('src/scripts/docs-navigation.ts', 'utf8');
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

test('SPEC-002 AC-01: Hero specimen renders unboxed blueprint backdrop, interactive anatomy rail, and zero chrome window', () => {
  const home = pages.get('/');
  assert.ok(home.includes('hero-specimen'), 'hero must render unboxed .hero-specimen stage');
  assert.ok(home.includes('hero-blueprint-backdrop blueprint-grid'), 'hero must include radial-faded blueprint backdrop');
  assert.ok(home.includes('id="hero-anatomy-rail"'), 'hero must render interactive #hero-anatomy-rail');
  assert.ok(home.includes('id="hero-anatomy-readout"'), 'hero must render architectural readout #hero-anatomy-readout');
  assert.ok(home.includes('verify · gate'), 'hero anatomy rail must expose all architectural layers');
  assert.ok(!home.includes('terminal-workbench-window'), 'hero must not wrap specimen in terminal-workbench-window card');
  assert.ok(!home.includes('Mueve el cursor') && !home.includes('Move pointer'), 'hero must not show purposeless pointer filler');
  assert.ok(!home.includes('Engine Atelier'), 'hero must not display misleading Engine Atelier buzzword');
  assert.ok(!home.includes('HMAC VERIFIED'), 'hero must not display fake HMAC telemetry on decorative canvas');
});

test('SPEC-002 AC-02: Workbench renders floating 4-mode dock and contextual panes', () => {
  const home = pages.get('/');
  assert.ok(home.includes('workbench-dock'), 'canvas must render workbench dock');
  assert.ok(home.includes('id="dock-sdd"'), 'dock must include sdd mode');
  assert.ok(home.includes('id="dock-multiagent"'), 'dock must include multiagent mode');
  assert.ok(home.includes('id="dock-guardian"'), 'dock must include guardian mode');
  assert.ok(home.includes('id="dock-verify"'), 'dock must include verify mode');
  assert.ok(home.includes('id="mode-pane-multiagent"'), 'workbench must include multiagent pane');
  assert.ok(home.includes('id="mode-pane-guardian"'), 'workbench must include guardian pane');
  assert.ok(home.includes('id="mode-pane-verify"'), 'workbench must include verify pane');
});

test('SPEC-002 AC-04: Agent selector organizes 3 integration tiers and bilingual capability matrix', () => {
  const home = pages.get('/');
  assert.ok(home.includes('Tier 1: Integración Profunda'), 'must include Tier 1 header (ES)');
  assert.ok(home.includes('Tier 1: Deep Task &amp; Subagent Integration'), 'must include Tier 1 header (EN)');
  assert.ok(home.includes('Tier 2: Detección de Terminal'), 'must include Tier 2 header (ES)');
  assert.ok(home.includes('Tier 2: Terminal Detection'), 'must include Tier 2 header (EN)');
  assert.ok(home.includes('Tier 3: TTY Shell Universal'), 'must include Tier 3 header (ES)');
  assert.ok(home.includes('Tier 3: Universal TTY Shell'), 'must include Tier 3 header (EN)');
  assert.ok(home.includes('Subagentes'), 'must include capability matrix headers (ES)');
  assert.ok(home.includes('Subagents'), 'must include capability matrix headers (EN)');
  assert.ok(home.includes('Firma HMAC'), 'must include hmac signature column in matrix (ES)');
  assert.ok(home.includes('HMAC Signature'), 'must include hmac signature column in matrix (EN)');
});

test('profiles describe review focus without inventing a project risk measurement', () => {
  const home = pages.get('/');
  assert.ok(home.includes('Foco de revisión:'));
  assert.ok(home.includes('Review focus:'));
  assert.ok(!home.includes('blast-radius rating:'), 'domain alone cannot determine code impact');
  assert.ok(!home.includes('+3,800'), 'comparison must not present unmeasured results as evidence');
});

test('SPEC-002 AC-07: Global styles enforce horizontal overflow containment', () => {
  const css = readFileSync('src/styles/global.css', 'utf8');
  assert.ok(css.includes('overflow-x: clip') || css.includes('overflow-x: hidden'), 'global styles must enforce horizontal overflow containment');
  assert.ok(css.includes('prefers-reduced-motion: reduce'), 'global styles must support prefers-reduced-motion');
});

test('Home quality invariants: valid pre markup, full 9-skill tree, high-contrast surfaces, and clean FAQ copy', () => {
  const home = pages.get('/');
  const preBlocks = home.match(/<pre\b[\s\S]*?<\/pre>/gi) || [];
  assert.ok(preBlocks.length > 0, 'home must contain terminal/spec <pre> blocks');
  assert.equal(preBlocks.some(block => /<div[\s>]/i.test(block)), false, 'HTML inside <pre> blocks must not nest block <div> elements');
  assert.ok(home.includes('omni-audit/'), 'Explorer skill tree must list all 9 skills including omni-audit/');
  assert.ok(!home.includes('without global Enter hijacking'), 'my-pay-service verify demo must not leak OmniPage test assertions');
  assert.ok(!home.includes('bg-black/20') && !home.includes('bg-black/40'), 'light-mode legible surfaces must not use dark translucent bg-black overlays');
  assert.ok(!home.includes('`npx omni-spec init`'), 'FAQ copy must not leak raw markdown backticks');
  assert.ok(home.includes('Paso 1') || home.includes('Tools (1/3)') || home.includes('Herramientas (1/3)'), 'terminal workbench initializes cleanly on active step');
});

test('documentation index covers every section exactly once in reading order on desktop and mobile', () => {
  const docs = pages.get('/docs/');
  const main = docs.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
  const sections = Array.from(main.matchAll(/<section\b[^>]*id="([^"]+)"/g), match => '#' + match[1]);
  const indexes = Array.from(docs.matchAll(/<nav\b[^>]*class="docs-nav-groups"[^>]*>([\s\S]*?)<\/nav>/g), match => attributes(match[1], 'href'));
  assert.equal(indexes.length, 2, 'one desktop index and one collapsed mobile index');
  for (const links of indexes) assert.deepEqual(links, sections, 'every section must be indexed in reading order');
  assert.ok(!docs.includes('class="docs-toc"'), 'a duplicate right index must not return');
});

test('workbench tabs expose their panels and one tab stop per group', () => {
  const home = pages.get('/');
  for (const prefix of ['dock-', 'tab-tree', 'tab-const', 'tab-context']) {
    const tabs = Array.from(home.matchAll(/<button\b([^>]*role="tab"[^>]*)>/g), match => match[1])
      .filter(attrs => attributes(' ' + attrs, 'id')[0]?.startsWith(prefix));
    assert.ok(tabs.length > 0);
    for (const attrs of tabs) {
      const target = attributes(' ' + attrs, 'aria-controls')[0];
      assert.ok(target && home.includes(`id="${target}"`), 'each tab must control a real panel');
      if (attrs.includes('aria-selected="false"')) assert.ok(attrs.includes('tabindex="-1"'));
    }
  }
});

test('shared shadcn buttons render to static HTML without hydration islands', () => {
  for (const route of ['/', '/docs/']) {
    const html = pages.get(route);
    assert.ok(html.includes('data-slot="button"'), 'shared Button primitive must actually render');
    assert.ok(!html.includes('<astro-island'), 'static controls must not ship React hydration');
  }
});


test('English routes contain translated HTML and reciprocal search alternates before JavaScript', () => {
  for (const route of ['/', '/docs/', '/changelog/']) {
    const es = load(pages.get(route));
    const en = load(pages.get('/en' + route));
    assert.equal(en('html').attr('lang'), 'en');
    assert.equal(en('[rel="canonical"]').attr('href'), 'https://omnispec.dev/en' + route);
    assert.equal(es('[hreflang="en"]').attr('href'), en('[rel="canonical"]').attr('href'));
    assert.equal(en('[hreflang="es"]').attr('href'), es('[rel="canonical"]').attr('href'));
    assert.notEqual(en('h1').text(), es('h1').text());
    assert.equal(en('[data-locale="es"]:not([hidden])').length, 0);
    assert.equal(en('[data-locale="en"][hidden]').length, 0);
    assert.equal(en('.desktop-nav a').filter((_, el) => !en(el).attr('href').startsWith('/en/')).length, 0);
  }
});

test('social previews and fonts are local, and sitemap describes all language routes', () => {
  for (const [route, html] of pages) {
    const $ = load(html);
    assert.equal($('[property="og:image"]').attr('content'), 'https://omnispec.dev/assets/og-banner.png');
    assert.ok(!html.includes('fonts.googleapis.com'), route + ': fonts must not block on a third-party stylesheet');
  }
  const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
  for (const route of routes) assert.ok(sitemap.includes('<loc>https://omnispec.dev' + route + '</loc>'));
  assert.ok(!sitemap.includes('<lastmod>'), 'do not invent per-page modification dates from product releases');
});
