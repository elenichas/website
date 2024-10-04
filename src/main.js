import { createApp } from "vue"; // Use Vue 3's createApp
import App from "./App.vue";
import router from "./router"; //router setup for Vue 3
import Vue3Lottie from "vue3-lottie";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import vuetify from "./plugins/vuetify"; // Import your Vuetify setup

// Create Vue app instance
const app = createApp(App);

// Use Vuetify
app.use(vuetify);

// Use Vue Router
app.use(router);

// Use Lottie for vue3
app.use(Vue3Lottie);

// Mount the app
app.mount("#app");
