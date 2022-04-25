import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  // 首页骨架屏
  {
    path: "/",
    name: "hello-world",
    component: () => import("../components/index.vue"),
  },
  // 视频滚动小窗显示
  {
    path: "/video",
    name: "video",
    component: () => import("../components/video/index.vue"),
  },
  {
    path: "/transtion",
    name: "transtion",
    component: () => import("../components/transtion/index.vue"),
  },
  {
    path: "/numberTransition",
    name: "numberTransition",
    component: () => import("../components/numberTransition/index.vue"),
  },
  {
    path: "/botherCommunicate",
    name: "botherCommunicate",
    component: () => import("../components/botherCommunicate/index.vue"),
  },
  {
    path: "/un-import",
    name: "un-import",
    component: () => import("../components/un-import/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
