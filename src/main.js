import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

Vue.use(LottieVuePlayer);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
