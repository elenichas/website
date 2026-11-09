// Page transition for the main navigation. The clicked link's pill grows into a
// full-screen panel in the opposite colour (white on the dark theme, black on the
// light one), the route changes underneath, and the panel drops away. The nav
// pill then slides from the old link to the new one.

const EASE = "cubic-bezier(.65, 0, .35, 1)";
let lastPill = null; // { left, width } of the pill on the previous page
let busy = false;

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const clamp = (v, max) => Math.min(Math.max(v, 0), max);

function rounded(rect) {
  const { innerWidth: w, innerHeight: h } = window;
  // If the link is not on screen (e.g. a closing mobile menu), grow from the centre.
  if (rect.height < 4 || rect.bottom <= 0 || rect.top >= h) {
    rect = { top: h / 2 - 22, bottom: h / 2 + 22, left: w / 2 - 60, right: w / 2 + 60 };
  }
  const top = clamp(rect.top, h), left = clamp(rect.left, w);
  const right = clamp(w - rect.right, w - left), bottom = clamp(h - rect.bottom, h - top);
  return `inset(${top}px ${right}px ${bottom}px ${left}px round 999px)`;
}

// Never let a stalled animation frame or animation leave the screen covered.
const settle = (promise, ms) => Promise.race([promise, new Promise((r) => setTimeout(r, ms))]);

function play(el, keyframes, duration) {
  const animation = el.animate(keyframes, { duration, easing: EASE, fill: "forwards" });
  return settle(animation.finished.catch(() => {}), duration + 250);
}

export async function navigateWithTransition(router, to, fromEl) {
  if (busy) return;
  if (reducedMotion() || !fromEl) { router.push(to); return; }
  busy = true;

  // Start loading the next page now, so it is ready when the panel has covered the screen.
  router.resolve(to).matched.forEach((record) => {
    Object.values(record.components || {}).forEach((c) => { if (typeof c === "function") c(); });
  });

  const panel = document.createElement("div");
  panel.className = "page-wipe";
  panel.setAttribute("aria-hidden", "true");
  document.body.appendChild(panel);

  try {
    await play(panel, [{ clipPath: rounded(fromEl.getBoundingClientRect()) }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], 460);
    try { await router.push(to); } catch { /* Navigation was cancelled; still reveal. */ }
    await settle(new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))), 100);
    // Drop the panel downward so the nav is uncovered first and the pill slide is visible.
    await play(panel, [{ clipPath: "inset(0% 0% 0% 0% round 0% 0% 0% 0%)" }, { clipPath: "inset(100% 0% 0% 0% round 50% 50% 0% 0%)" }], 520);
  } finally {
    panel.remove();
    busy = false;
  }
}

// Place the pill under the active link. If the previous page had the pill under
// a different link, stretch it across both and settle on the new one.
export function placePill(pill, activeEl, { delay = 0 } = {}) {
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
      { transform: `translateX(${minLeft}px)`, width: `${span}px`, offset: 0.5 },
      { transform: `translateX(${left}px)`, width: `${width}px` },
    ],
    { duration: 560, delay, easing: EASE, fill: "backwards" },
  );
}

export const isTransitioning = () => busy;
