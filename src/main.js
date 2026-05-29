import { createApp } from "vue"; // Use Vue 3's createApp
import { createHead } from "@vueuse/head";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";
import router from "./router"; //router setup for Vue 3
import i18n from "./i18n";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  theme: {
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
      },
    },
  },
});

// Create Vue app instance
const app = createApp(App);

// Use head for meta tags
const head = createHead();
app.use(head);

// Use local translations
app.use(i18n);

// Use Vuetify
app.use(vuetify);

// Use Vue Router
app.use(router);

// Mount the app
app.mount("#app");
