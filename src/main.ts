import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import mitt from 'mitt'
import { createHead } from '@vueuse/head' // <--

const Mitt = mitt()
const head = createHead()

const app = createApp(App)

// 全局挂在Mitt
app.config.globalProperties.$Bus = Mitt

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt
  }
}

app.use(router).use(head).mount('#app')
