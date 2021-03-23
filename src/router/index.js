import Vue from "vue";
import VueRouter from "vue-router";
import CVView from "../views/CV/CVView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CV",
    component: CVView
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/Blog/BlogView.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin/AdminView.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
