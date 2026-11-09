import { createRouter, createWebHistory } from "vue-router";
import "./style.css";

// Lazy-loaded route components (code-split per page)
const Craft = () => import("./views/design.vue");
const PaperAndParcel = () => import("./views/uxui/PaperAndParcel.vue");
const AdventuresOfSimba = () => import("./views/uxui/AdventuresOfSimba.vue");
const AISandbox = () => import("./views/playground/AISandbox.vue");
const VintedSmartBundling = () => import("./views/playground/VintedSmartBundling.vue");
const PlumPulse = () => import("./views/playground/PlumPulse.vue");
const Booking = () => import("./views/Booking.vue");
const About = () => import(/* webpackChunkName: "about" */ "./views/about.vue");
const HiddenDesignSystem = () => import(/* webpackChunkName: "design-system" */ "./views/hidden/DesignSystemCaseStudy.vue");
const NotFound = () => import(/* webpackChunkName: "not-found" */ "./views/not-found.vue");
const HapiProject = () => import(/* webpackChunkName: "hapi" */ "./views/architecture/HapiProject.vue");
const ThesisProject = () => import(/* webpackChunkName: "thesis" */ "./views/architecture/ThesisProject.vue");
const WorkshopDesign = () => import(/* webpackChunkName: "workshop" */ "./views/architecture/WorkshopDesign.vue");
const FilosMobileApp = () => import(/* webpackChunkName: "filos" */ "./views/uxui/FilosMobileApp.vue");
const LocalBakeryApp = () => import(/* webpackChunkName: "bakery" */ "./views/uxui/LocalBakeryApp.vue");
const ModularApp = () => import(/* webpackChunkName: "modular" */ "./views/uxui/ModularApp.vue");
const MoonPixelApp = () => import(/* webpackChunkName: "moon" */ "./views/uxui/MoonPixelApp.vue");
const IndustrialConfigurator = () => import(/* webpackChunkName: "industrial" */ "./views/uxui/IndustrialConfigurator.vue");
const LanguageLearningApp = () => import(/* webpackChunkName: "language" */ "./views/uxui/LanguageLearningApp.vue");
const CoachVerificationApp = () => import(/* webpackChunkName: "coach" */ "./views/uxui/CoachVerificationApp.vue");
const Map3DStudio = () => import("./views/uxui/Map3DStudio.vue");

// Define your routes
const routes = [
  { path: "/work", redirect: "/" },
  { path: "/products/paper-and-parcel", name: "Paper & Parcel", component: PaperAndParcel },
  { path: "/products/adventures-of-simba", name: "The Adventures of Simba", component: AdventuresOfSimba },
  { path: "/products/map3d-studio", name: "Map3D Studio", component: Map3DStudio },
  {
    name: "Home",
    path: "/",
    component: Craft,
  },
    {
    name: "Products Redirect",
    path: "/products",
    redirect: "/craft",
  },
  {
    name: "Craft", 
    path: "/craft",
    redirect: "/",
  },
  {
    path: "/playground",
    redirect: "/",
  },
  {
    name: "AI Sandbox",
    path: "/products/ai-sandbox",
    component: AISandbox,
  },
  {
    name: "Vinted Smart Bundling",
    path: "/products/vinted-smart-bundling",
    component: VintedSmartBundling,
  },
  {
    name: "Plum Pulse",
    path: "/products/plum-pulse",
    component: PlumPulse,
  },
  { path: "/book", name: "Booking", component: Booking },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Hidden Design System",
    path: "/hidden/design-system",
    component: HiddenDesignSystem,
  },
    { path: "/playground/ai-sandbox", redirect: "/products/ai-sandbox" },
  { path: "/playground/vinted-smart-bundling", redirect: "/products/vinted-smart-bundling" },
  { path: "/playground/plum-pulse", redirect: "/products/plum-pulse" },
  // Legacy redirects for old URLs
  {
    path: "/design",
    redirect: "/products",
  },
  {
    path: "/development", 
    redirect: "/craft",
  },
    {
    path: "/products/hapi-project",
    component: HapiProject,
  },
  {
    path: "/products/thesis-project",
    component: ThesisProject,
  },
  {
    path: "/products/workshop-design",
    component: WorkshopDesign,
  },
  {
    path: "/products/filos-mobile-app",
    component: FilosMobileApp,
  },
  {
    path: "/products/brew-crumb",
    component: LocalBakeryApp,
  },
  {
    path: "/products/modular-app",
    component: ModularApp,
  },
  {
    path: "/products/lunar-app",
    component: MoonPixelApp,
  },
  {
    path: "/products/industrial-configurator",
    component: IndustrialConfigurator,
  },
  {
    path: "/products/language-learning-app",
    component: LanguageLearningApp,
  },
  {
    path: "/products/coach-verification-app",
    component: CoachVerificationApp,
  },
  // Legacy design routes
  {
    path: "/design/hapi-project",
    redirect: "/products/hapi-project",
  },
  {
    path: "/design/thesis-project",
    redirect: "/products/thesis-project",
  },
  {
    path: "/design/workshop-design",
    redirect: "/products/workshop-design",
  },
  {
    path: "/uxui/filos-mobile-app",
    redirect: "/products/filos-mobile-app",
  },
  {
    path: "/uxui/brew-crumb",
    redirect: "/products/brew-crumb",
  },
    {
    path: "/uxui/modular-app",
    redirect: "/products/modular-app",
  },
  {
    path: "/uxui/lunar-app",
    redirect: "/products/lunar-app",
  },
  {
    name: "404 - Not Found",
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Replaces `mode: 'history'` in Vue 3
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path.startsWith("/products/")) {
      return new Promise((resolve) => {
        requestAnimationFrame(() => {
          resolve({ left: 0, top: 0, behavior: "auto" });
        });
      });
    }

    return { left: 0, top: 0, behavior: "auto" };
  },
});

// One title format for every page: "<Page> · Eleni Chasioti".
const SITE = "Eleni Chasioti";
const HOME_TITLE = `${SITE} · Product designer & UX engineer`;
const PAGE_TITLES = {
  "/about": "About",
  "/book": "Book a call",
  "/products/paper-and-parcel": "Paper & Parcel",
  "/products/adventures-of-simba": "The Adventures of Simba",
  "/products/plum-pulse": "Plum Pulse",
  "/products/ai-sandbox": "AI Interface Sandbox",
  "/products/vinted-smart-bundling": "Vinted Smart Local Bundling",
  "/products/map3d-studio": "Map3D Studio",
  "/products/industrial-configurator": "Industrial Facility Configurator",
  "/products/lunar-app": "Moon Habitat Configurator",
  "/products/coach-verification-app": "Vintage Coach Catalog",
  "/products/language-learning-app": "Arabiya Language App",
  "/products/filos-mobile-app": "Filos Inclusive Activity App",
  "/products/brew-crumb": "Brew & Crumb",
  "/products/modular-app": "Modular App",
  "/products/hapi-project": "Hapi Modular Housing",
  "/products/thesis-project": "Cricket WFC Plugin",
  "/products/workshop-design": "Digital Futures Workshop",
  "/hidden/design-system": "Design System",
};

router.afterEach((to) => {
  if (to.path === "/") {
    document.title = HOME_TITLE;
    return;
  }
  const page = PAGE_TITLES[to.path] || (to.matched.some((r) => r.name === "NotFound" || r.path.includes("pathMatch")) ? "Page not found" : null);
  document.title = page ? `${page} · ${SITE}` : HOME_TITLE;
});

export default router;
