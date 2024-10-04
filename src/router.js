import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home.vue";
import NotFound from "./views/not-found.vue";
import "./style.css";

// Define your routes
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "404 - Not Found",
    path: "/:pathMatch(.*)*", // This is the Vue 3 equivalent for catching all unmatched routes
    component: NotFound,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Replaces `mode: 'history'` in Vue 3
  routes,
});

export default router;
