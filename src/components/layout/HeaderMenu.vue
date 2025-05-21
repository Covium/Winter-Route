<script setup lang="ts">
import CenterFrame from '@/components/utils/CenterFrame.vue'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconBell from '@/components/icons/IconBell.vue'
import IconPerson from '@/components/icons/IconPerson.vue'
</script>

<template>
  <header class="text-primary-contrast flex h-50 w-full justify-between gap-9 p-9">
    <div class="flex items-center gap-9 select-none">
      <CenterFrame width="32px" height="32px"><IconLogo /></CenterFrame>
      <p class="overflow-hidden text-xl whitespace-nowrap">Winter Route</p>
    </div>
    <div class="flex gap-9">
      <CenterFrame width="32px" height="32px"><IconBell /></CenterFrame>
    </div>
  </header>
</template>
