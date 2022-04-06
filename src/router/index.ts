import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  // 首页骨架屏
  {
    path: "/",
    name: "hello-world",
    component: () => import("../components/index.vue"),
  },
  // // 视频滚动小窗显示
  // {
  //   path: "/video",
  //   name: "video",
  //   component: defineAsyncComponent(() => import("../components/video.vue")),
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
