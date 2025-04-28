<script setup lang="ts">
import HeaderMenu from '@/components/layout/HeaderMenu.vue'
import NavigationPanel from '@/components/layout/NavigationPanel.vue'
import MainSpace from '@/components/layout/MainSpace.vue'
</script>

<template>
  <HeaderMenu class="shrink-0" />
  <div class="flex grow overflow-hidden">
    <NavigationPanel class="shrink-0" />
    <MainSpace class="grow" />
  </div>
</template>
