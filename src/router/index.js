import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import Courses from "../views/Courses.vue";
// import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    meta: { layout: "main" },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/courses",
    name: "Courses",
    meta: { layout: "main" },
    component: () => import("../views/Courses.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    meta: { layout: "main" },
    component: () => import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
