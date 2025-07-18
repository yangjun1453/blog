import { createWebHistory, createRouter } from "vue-router";
import Layout from "../pages/layout/index.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "blogs",
        name: "blogs",
        component: () => import("../pages/blogs/index.vue"),
      },
      {
        path: "photogallery",
        name: "photo",
        component: () => import("../pages/photo-gallery/index.vue"),
      },
      {
        path: "vlog",
        name: "vlog",
        component: () => import("../pages/vlog/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
