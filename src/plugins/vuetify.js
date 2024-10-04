// src/plugins/vuetify.js
import "vuetify/styles"; // Import Vuetify's styles
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi"; // Optional: MDI icons
import "@mdi/font/css/materialdesignicons.css"; // Optional if you're using MDI

const vuetify = createVuetify({
  icons: {
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

export default vuetify;
