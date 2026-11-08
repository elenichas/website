import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";

const app = createApp(App);

app.use(createHead());
app.use(i18n);
app.use(router);

app.mount("#app");
