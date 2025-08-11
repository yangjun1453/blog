import { createWebHashHistory, createRouter } from "vue-router";
import Layout from "../pages/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",

    children: [
      {
        path: "home", // 添加 home 页面
        name: "home",
        component: () => import("../pages/home/index.vue"),
      },
      {
        path: "about",
        name: "about",
        component: () => import("../pages/about/index.vue"),
      },
      {
        path: "blogs",
        name: "blogs",
        component: () => import("../pages/blogs/index.vue"),
      },

      {
        path: "photogallery",
        name: "photogallery",
        component: () => import("../pages/photo-gallery/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
