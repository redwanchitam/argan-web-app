import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "./assets/js/bootstrap.bundle.min.js";
// import "./assets/js/jquery.min.js";
// import "./assets/js/waypoints.min.js";
// import "./assets/js/jquery.easing.min.js";
// import "./assets/js/owl.carousel.min.js";
// import "./assets/js/jquery.counterup.min.js";
// import "./assets/js/jquery.countdown.min.js";
// import "./assets/js/default/jquery.passwordstrength.js";
// import "./assets/js/default/dark-mode-switch.js";
// import "./assets/js/default/no-internet.js";
// import "./assets/js/default/active.js";
// import "./assets/js/pwa.js";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
