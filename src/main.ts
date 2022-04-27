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
app.config.globalProperties.$filters = {
  format<T extends any>(str: T): string {
    if (String(str).length < 5) {
      return '你的字符串是小于5的'
    }
    return `${str}`
  }
}

type Filter = {
  format<T extends any>(str: T): string
}

declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mitt
    $filters: Filter
  }
}

app.use(router).use(head).mount('#app')
