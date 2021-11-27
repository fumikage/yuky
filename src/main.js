import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueSelectImage from "vue-select-image";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/assets/global.css";
require("vue-select-image/dist/vue-select-image.css");
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSelectImage);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
