<script setup lang="ts">
import HeaderMenu from '@/components/layout/HeaderMenu.vue'
import NavigationPanel from '@/components/layout/NavigationPanel.vue'
import MainSpace from '@/components/layout/MainSpace.vue'
import { isMobile } from '@/features/helpers/isMobile'
</script>

<template>
  <template v-if="isMobile">
    <MainSpace class="grow" />
    <NavigationPanel class="shrink-0" />
  </template>

  <template v-else>
    <HeaderMenu class="shrink-0" />
    <div class="flex grow overflow-hidden">
      <NavigationPanel class="shrink-0" />
      <MainSpace class="grow" />
    </div>
  </template>
</template>
