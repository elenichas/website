import { createRouter, createWebHistory } from "vue-router";
import "./style.css";

// Lazy-loaded route components (code-split per page)
const Home = () => import(/* webpackChunkName: "home" */ "./views/home.vue");
const Design = () => import(/* webpackChunkName: "products" */ "./views/design.vue");
const Development = () => import(/* webpackChunkName: "craft" */ "./views/development.vue");
const About = () => import(/* webpackChunkName: "about" */ "./views/about.vue");
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

// Define your routes
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
    {
    name: "Products",
    path: "/products",
    component: Design,
  },
  {
    name: "Craft", 
    path: "/craft",
    component: Development,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "404 - Not Found",
    path: "/:pathMatch(.*)*", // This is the Vue 3 equivalent for catching all unmatched routes
    component: NotFound,
  },
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
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Replaces `mode: 'history'` in Vue 3
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    return { top: 0 };
  },
});

export default router;
