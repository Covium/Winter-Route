import '@/assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import GeneralStatistics from '@/components/pages/main-page/GeneralStatistics.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: GeneralStatistics }],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
