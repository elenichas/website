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
import AnimalShelterWebsite from "./views/uxui/AnimalShelterWebsite.vue";
import "./style.css";

// Define your routes
const routes = [
  {
    name: "Home",
    path: "/home",
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
    path: "/architecture/hapi-project",
    component: HapiProject,
  },
  {
    path: "/architecture/thesis-project",
    component: ThesisProject,
  },
  {
    path: "/architecture/workshop-design",
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
    path: "/uxui/animal-shelter-website",
    component: AnimalShelterWebsite,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Replaces `mode: 'history'` in Vue 3
  routes,
});

export default router;
