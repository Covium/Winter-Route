<script setup lang="ts">
import CenterFrame from '@/components/utils/CenterFrame.vue'

defineProps({
  to: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  collapsed: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <component
    :is="to ? 'RouterLink' : 'div'"
    v-bind="to ? { to, title: collapsed ? title : '' } : {}"
    class="transition-color flex cursor-pointer items-center gap-6 pb-9 duration-300 last:pb-0"
    activeClass="current-link"
  >
    <CenterFrame width="32px" height="32px" class="shrink-0">
      <slot />
    </CenterFrame>
    <p
      class="navigation-link text-primary-contrast transition-opacity duration-300"
      :class="collapsed ? 'opacity-0' : 'opacity-100'"
    >
      {{ title }}
    </p>
  </component>
</template>
