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
    name: "Design",
    path: "/design",
    component: Design,
  },
  {
    name: "Development",
    path: "/development",
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
  {
    path: "/design/hapi-project",
    component: HapiProject,
  },
  {
    path: "/design/thesis-project",
    component: ThesisProject,
  },
  {
    path: "/design/workshop-design",
    component: WorkshopDesign,
  },
  {
    path: "/uxui/filos-mobile-app",
    component: FilosMobileApp,
  },
  {
    path: "/uxui/local-bakery-app",
    component: LocalBakeryApp,
  },
  {
    path: "/uxui/modular-app",
    component: ModularApp,
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
