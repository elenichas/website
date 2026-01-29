import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home.vue";
import Design from "./views/design.vue";
import Development from "./views/development.vue";
import About from "./views/about.vue";
import NotFound from "./views/not-found.vue";
import HapiProject from "./views/architecture/HapiProject.vue";
import ThesisProject from "./views/architecture/ThesisProject.vue";
import WorkshopDesign from "./views/architecture/WorkshopDesign.vue";
import FilosMobileApp from "./views/uxui/FilosMobileApp.vue";
import LocalBakeryApp from "./views/uxui/LocalBakeryApp.vue";
import ModularApp from "./views/uxui/ModularApp.vue";
import "./style.css";

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
    path: "/products/local-bakery-app",
    component: LocalBakeryApp,
  },
  {
    path: "/products/modular-app",
    component: ModularApp,
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
    path: "/uxui/local-bakery-app",
    redirect: "/products/local-bakery-app",
  },
  {
    path: "/uxui/modular-app",
    redirect: "/products/modular-app",
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
