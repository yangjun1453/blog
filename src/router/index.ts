import { createWebHashHistory, createRouter } from "vue-router";
import Layout from "../pages/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
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
        path: "vlog",
        name: "vlog",
        component: () => import("../pages/vlog/index.vue"),
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