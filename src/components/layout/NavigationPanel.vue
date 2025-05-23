<script setup lang="ts">
import NavigationLink from '@/components/layout/NavigationLink.vue'
import IconHome from '@/components/icons/IconHome.vue'
import IconBookWithStar from '@/components/icons/IconBookWithStar.vue'
import IconBachelorHat from '@/components/icons/IconBachelorHat.vue'
import IconOfficeBuilding from '@/components/icons/IconOfficeBuilding.vue'
import IconArrowHeads from '@/components/icons/IconArrowHeads.vue'
import { ref, onMounted, nextTick } from 'vue'
import { isMobile } from '@/features/helpers/isMobile'

const collapsed = ref(true)
const expandedWidth = ref('auto')

const links = [
  { to: '/', title: 'Главная', icon: IconHome },
  { to: '/skills', title: 'Навыки', icon: IconBookWithStar },
  { to: '/instructors', title: 'Инструкторы', icon: IconBachelorHat },
  { to: '/organizations', title: 'Организации', icon: IconOfficeBuilding },
]

const mobileLinks = links.slice().reverse()

function getExpandedWidth() {
  let switchedCollapsed = false
  const panel = document.querySelector('#navigation-panel')
  if (panel) {
    if (collapsed.value) {
      switchedCollapsed = true
      switchCollapsed()
    }
    nextTick(() => {
      const arbitraryAddition = 4
      expandedWidth.value = `${panel.scrollWidth + arbitraryAddition}px`
      if (switchedCollapsed) switchCollapsed()
    })
  }
}

function switchCollapsed() {
  collapsed.value = !collapsed.value
  localStorage.setItem('navigation-collapsed', String(collapsed.value))
}

onMounted(() => {
  const savedState = localStorage.getItem('navigation-collapsed')
  if (savedState !== null) {
    collapsed.value = savedState === 'true'
  }
})

window.onload = () => {
  getExpandedWidth()
}
</script>

<template>
  <div
    v-if="isMobile"
    id="navigation-panel"
    class="text-primary-contrast flex h-50 justify-between overflow-x-auto overflow-y-hidden"
  >
    <NavigationLink v-for="link in mobileLinks" :key="link.to" :to="link.to" :title="link.title">
      <component :is="link.icon" />
    </NavigationLink>
  </div>

  <div
    v-else
    id="navigation-panel"
    class="text-primary-contrast flex flex-col justify-between gap-9 overflow-hidden p-9 transition-all duration-300"
    :style="{ width: collapsed ? '50px' : expandedWidth }"
  >
    <div class="flex flex-col gap-9">
      <NavigationLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        :title="link.title"
        :collapsed
      >
        <component :is="link.icon" />
      </NavigationLink>
    </div>
    <NavigationLink @click="switchCollapsed" title="Свернуть" :collapsed>
      <IconArrowHeads
        class="transition-transform duration-300"
        :class="collapsed ? '' : '-rotate-180'"
      />
    </NavigationLink>
  </div>
</template>
