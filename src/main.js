import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils/rem";
// import axios from "axios"


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
