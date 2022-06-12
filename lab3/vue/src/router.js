import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/reg",
    name: "reg",
    component: () => import("./components/Reg")
  },
  {
    path: "/sing",
    name: "sing",
    component: () => import("./components/Sing")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("./components/Profile"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("./components/Test"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./components/About"),
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;