import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/inscription",
    name: "Register1",
    component: function () {
      return import("../views/register/Register1.vue");
    },
  },
  {
    path: "/inscription1",
    name: "Register2",
    component: function () {
      return import("../views/register/Register2.vue");
    },
  },
  {
    path: "/inscription2",
    name: "Register3",
    component: function () {
      return import("../views/register/Register3.vue");
    },
  },
  {
    path: "/inscription3",
    name: "Register4",
    component: function () {
      return import("../views/register/Register4.vue");
    },
  },
  {
    path: "/inscription4",
    name: "Register5",
    component: function () {
      return import("../views/register/Register5.vue");
    },
  },
  {
    path: "/inscription5",
    name: "Register6",
    component: function () {
      return import("../views/register/Register6.vue");
    },
  },
  {
    path: "/login",
    name: "Login",
    component: function () {
      return import("../views/main/Login.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
