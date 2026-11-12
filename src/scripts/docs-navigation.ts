const sidebar = document.querySelector<HTMLElement>('.docs-sidebar');
const menu = document.querySelector<HTMLDetailsElement>('.docs-mobile-nav');
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.docs-nav-groups a'));
const sections = Array.from(document.querySelectorAll<HTMLElement>('.prose > section[id]'));
let activeId = '';

/** Tracks the last heading above the reading line, in the same order as the index. */
function updateActive(): void {
  let current: HTMLElement | undefined = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top > 144) break;
    current = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    current = sections.at(-1);
  }
  if (!current || current.id === activeId) return;
  activeId = current.id;
  for (const link of links) {
    if (link.hash === '#' + activeId) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  const active = sidebar?.querySelector<HTMLAnchorElement>('[aria-current]');
  if (sidebar && active) {
    const bounds = sidebar.getBoundingClientRect();
    const target = active.getBoundingClientRect();
    if (target.top < bounds.top || target.bottom > bounds.bottom) {
      sidebar.scrollTop += target.top - bounds.top - sidebar.clientHeight / 2 + target.height / 2;
    }
  }
}

let pending = false;
function scheduleUpdate(): void {
  if (pending) return;
  pending = true;
  requestAnimationFrame(() => { pending = false; updateActive(); });
}

window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate);
window.addEventListener('hashchange', scheduleUpdate);
window.addEventListener('pageshow', scheduleUpdate);
window.addEventListener('omni:language-change', scheduleUpdate);

menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.open = false;
  const target = document.getElementById(link.hash.slice(1));
  target?.focus({ preventScroll: true });
}));
menu?.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    menu.open = false;
    menu.querySelector('summary')?.focus();
  }
});
scheduleUpdate();
