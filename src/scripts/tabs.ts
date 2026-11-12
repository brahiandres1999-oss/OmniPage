/** Adds roving focus and horizontal arrow/Home/End activation to an existing tab list. */
export function enableTabKeyboard(tabs: HTMLButtonElement[]): void {
  tabs.forEach((tab, index) => {
    tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
    tab.addEventListener('keydown', event => {
      let next: number;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      tabs[next].focus();
      tabs[next].click();
    });
    tab.addEventListener('click', () => {
      tabs.forEach(item => { item.tabIndex = item === tab ? 0 : -1; });
    });
  });
}
