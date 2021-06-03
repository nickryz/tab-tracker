import { createRouter, createWebHistory } from "vue-router";
import Hello from "../views/Hello.vue";

const routes = [
  {
    path: "/",
    name: "Hello",
    component: Hello,
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
