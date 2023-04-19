import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import loadingView from "@/components/loadingView.vue";

Vue.config.productionTip = false;
Vue.component("loadingView", loadingView);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
