import { reactive } from "vue";

export const themes = [
  { id: "orange", name: "Original orange", el: "Πορτοκαλί", header: "#f65b32", ink: "#251a25", accents: ["#d5c5ec", "#e6f2a7", "#fbc7b9"] },
  { id: "butter", name: "Butter & ink", el: "Κίτρινο & μελάνι", header: "#f2d76b", ink: "#252318", accents: ["#E8DDAF", "#D8E3CD", "#E9D0B8"] },
  { id: "sky", name: "Electric cobalt", el: "Έντονο μπλε", header: "#2348D8", headerInk: "#FFFFFF", ink: "#16224C", accents: ["#A9D7FF", "#F8E34B", "#FFB59E"] },
  { id: "sage", name: "Sage & forest", el: "Φασκόμηλο & δάσος", header: "#bcd0ac", ink: "#213227", accents: ["#D9E3CA", "#ECD5C1", "#E8E1BA"] },
  { id: "rose", name: "Cherry & pink", el: "Κερασί & ροζ", header: "#B51F3D", headerInk: "#FFFFFF", ink: "#401622", accents: ["#FFADC5", "#FFD74B", "#F5DAD0"] },
  { id: "sand", name: "Sand & midnight", el: "Άμμος & μεσάνυχτα", header: "#e3d6bd", ink: "#202b3a", accents: ["#D6DFE8", "#EDDBC3", "#D6DFCF"] },
  { id: "mint", name: "Poolside turquoise", el: "Τυρκουάζ", header: "#22CDBA", ink: "#10342F", accents: ["#8DE8DE", "#FFD34D", "#FFB494"] },
  { id: "apricot", name: "Apricot & cocoa", el: "Βερίκοκο & κακάο", header: "#f2bd8e", ink: "#372820", accents: ["#F3DDC6", "#D2E2D9", "#EBD8CB"] },
  { id: "lime", name: "Signal yellow", el: "Έντονο κίτρινο", header: "#FFE329", ink: "#202218", accents: ["#E5F259", "#A8D9FF", "#FFA98C"] },
  { id: "mono", name: "Black & white", el: "Μαύρο & λευκό", header: "#ffffff", ink: "#111111", accents: ["#eeeeee", "#e4e4e4", "#f2f2f2"] },
];

export const themeState = reactive({ id: "orange" });

export function setTheme(id, persist = true) {
  const theme = themes.find(item => item.id === id) || themes[0];
  themeState.id = theme.id;
  const root = document.documentElement;
  root.dataset.portfolioTheme = theme.id;
  const values = { header: theme.header, "header-ink": theme.headerInk || theme.ink, ink: theme.ink, accent: theme.accents[0], second: theme.accents[1], third: theme.accents[2] };
  Object.entries(values).forEach(([key, value]) => root.style.setProperty(`--portfolio-${key}`, value));
  if (persist) {
    try { localStorage.setItem("portfolio-theme", theme.id); } catch { /* Theme selection still works without storage. */ }
  }
}

export function initTheme() {
  let id = "orange";
  try { id = localStorage.getItem("portfolio-theme") || id; } catch { /* Use the default. */ }
  setTheme(id, false);
}
