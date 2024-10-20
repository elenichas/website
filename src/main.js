import { createApp } from "vue"; // Use Vue 3's createApp

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi"; // Optional: MDI icons
import "@mdi/font/css/materialdesignicons.min.css"; // Optional if you're using MDI
import "vuetify/styles";

import App from "./App.vue";
import router from "./router"; //router setup for Vue 3
import Vue3Lottie from "vue3-lottie";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
// import vuetify from "./plugins/vuetify"; // Import your Vuetify setup

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: "mdi", // Use Material Design Icons
    defaultSet: "mdi", // Use Material Design Icons
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        primary: "#1976D2", // Define your custom theme colors
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
      },
    },
  },
});

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
