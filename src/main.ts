import '@/assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import GeneralStatistics from '@/components/main-page/GeneralStatistics.vue'
import { Carousel, Tooltip, initTWE } from "tw-elements";
initTWE({ Carousel, Tooltip });

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: GeneralStatistics }],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
