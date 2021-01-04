import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from 'jquery';

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

  $(document).ready(function(){
    $(".sleepingProductImg").on( "click", function(){
      alert($(this).html());
    });
  });