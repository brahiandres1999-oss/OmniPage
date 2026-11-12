/** Persistent pause on the strip, available by touch, pointer and keyboard. */
const marquee = document.querySelector<HTMLElement>('.integration-marquee');
function toggleMotion(): void {
  marquee?.setAttribute('aria-pressed', String(marquee.getAttribute('aria-pressed') !== 'true'));
}
marquee?.addEventListener('click', toggleMotion);
marquee?.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleMotion();
  }
});
