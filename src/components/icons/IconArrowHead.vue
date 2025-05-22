<script setup lang="ts">
defineProps({
  width: { type: String, default: '10' },
  height: { type: String, default: '6' },
  viewBox: { type: String, default: '0 0 10 6' },
  stroke: { type: String, default: 'currentColor' },
  strokeWidth: { type: String, default: '2' },
})
</script>

<template>
  <svg :width :height :viewBox fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1L5 5L1 1" :stroke :stroke-width />
  </svg>
</template>
