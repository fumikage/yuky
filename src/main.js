import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { IconsPlugin } from "bootstrap-vue";
import VueSelectImage from "vue-select-image";
import "@/assets/global.css";
import "@/assets/font.css";
import VModal from "vue-js-modal";
require("vue-select-image/dist/vue-select-image.css");
Vue.use(IconsPlugin);
Vue.use(VueSelectImage);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
