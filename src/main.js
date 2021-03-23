import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import wysiwyg from "vue-wysiwyg";
import "./assets/variables.scss";
import "./assets/general.scss";
import VueFullPage from "vue-fullpage.js";

Vue.use(VueFullPage);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
Vue.use(wysiwyg, {});
