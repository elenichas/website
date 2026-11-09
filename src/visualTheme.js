import { reactive } from 'vue';

export const visualThemeState = reactive({ mode: 'dark' });

export function setVisualTheme(mode, persist = true) {
  visualThemeState.mode = mode === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.visualTheme = visualThemeState.mode;
  if (persist) {
    try { localStorage.setItem('visual-theme', visualThemeState.mode); } catch { /* The theme still works without storage. */ }
  }
}

export function initVisualTheme() {
  // Follow the visitor's system setting unless they picked a theme here.
  let mode = window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  try { mode = localStorage.getItem('visual-theme') || mode; } catch { /* Use the default. */ }
  setVisualTheme(mode, false);
}
