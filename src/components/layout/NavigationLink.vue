<script setup lang="ts">
import CenterFrame from '@/components/utils/CenterFrame.vue'
import { isMobile } from '@/features/helpers/isMobile'

defineProps({
  to: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <RouterLink
    v-if="isMobile"
    :to
    class="flex w-full min-w-70 flex-col items-center transition-all"
    activeClass="current-link"
  >
    <CenterFrame width="32px" height="32px">
      <slot />
    </CenterFrame>
    <p class="max-w-full grow truncate text-sm font-bold">{{ title }}</p>
  </RouterLink>

  <component
    v-else
    :is="to ? 'RouterLink' : 'div'"
    v-bind="to ? { to, title: collapsed ? title : '' } : {}"
    class="hover:bg-primary-soft flex cursor-pointer items-center gap-6 rounded-[5px] transition-all duration-300 select-none last:pb-0"
    activeClass="current-link"
  >
    <CenterFrame width="32px" height="32px" class="shrink-0">
      <slot />
    </CenterFrame>
    <p
      class="text-lg transition-opacity duration-300"
      :class="collapsed ? 'opacity-0' : 'opacity-100'"
    >
      {{ title }}
    </p>
  </component>
</template>

<style scoped lang="css">
.current-link {
  @apply drop-shadow-[0_0_5px_var(--color-primary-contrast)];
}
</style>
