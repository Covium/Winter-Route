import '@/assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import HomePage from '@/components/pages/main-page/HomePage.vue'
import SkillsPage from '@/components/pages/skills-page/SkillsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/skills', component: SkillsPage },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
