<script setup lang="ts">
defineProps({
  width: { type: String, default: 'fit-content' },
  height: { type: String, default: 'fit-content' },
})
</script>

<template>
  <div :style="{ width, height }" class="flex items-center justify-center text-center">
    <slot />
  </div>
</template>
