<script setup lang="ts">
import HeaderMenu from '@/components/layout/HeaderMenu.vue'
import NavigationPanel from '@/components/layout/NavigationPanel.vue'
import MainSpace from '@/components/layout/MainSpace.vue'
import { isMobile } from '@/features/helpers/isMobile'
</script>

<template>
  <HeaderMenu v-if="!isMobile" class="shrink-0" />
  <div v-if="!isMobile" class="flex grow overflow-hidden">
    <NavigationPanel class="shrink-0" />
    <MainSpace class="grow" />
  </div>
  <div v-else class="flex grow flex-col overflow-hidden">
    <MainSpace class="grow" />
    <NavigationPanel class="shrink-0" />
  </div>
</template>
