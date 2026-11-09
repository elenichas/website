// Sliding pill for the main navigation. The pill sits under the active link;
// when the page changes it stretches across from the previous link to the new
// one, then settles. It is blended with "difference", so the text it passes
// over flips between black and white.

const EASE = "cubic-bezier(.65, 0, .35, 1)";
let lastPill = null; // { left, width } of the pill on the previous page

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function placePill(pill, activeEl) {
  if (!pill) return;
  if (!activeEl) { pill.classList.remove("ready"); lastPill = null; return; }
  const left = activeEl.offsetLeft;
  const width = activeEl.offsetWidth;
  pill.style.width = `${width}px`;
  pill.style.transform = `translateX(${left}px)`;
  pill.classList.add("ready");

  const from = lastPill;
  lastPill = { left, width };
  if (!from || from.left === left || reducedMotion()) return;

  const minLeft = Math.min(from.left, left);
  const span = Math.max(from.left + from.width, left + width) - minLeft;
  pill.animate(
    [
      { transform: `translateX(${from.left}px)`, width: `${from.width}px` },
      { transform: `translateX(${minLeft}px)`, width: `${span}px`, offset: 0.45 },
      { transform: `translateX(${left}px)`, width: `${width}px` },
    ],
    { duration: 560, easing: EASE },
  );
}
