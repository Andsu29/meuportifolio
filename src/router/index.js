import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/sobreView.vue"),
  },
  {
    path: "/projetos",
    name: "projetos",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/projetosView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
