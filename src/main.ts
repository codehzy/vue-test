import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import mitt from "mitt";

const Mitt = mitt();

const app = createApp(App);

// 全局挂在Mitt
app.config.globalProperties.$Bus = Mitt;

declare module "vue" {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt;
  }
}

app.use(router).mount("#app");
