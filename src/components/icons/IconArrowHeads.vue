<script setup lang="ts">
defineProps({
  width: { type: String, default: '22' },
  height: { type: String, default: '24' },
  viewBox: { type: String, default: '0 0 22 24' },
  fill: { type: String, default: 'currentColor' },
})
</script>

<template>
  <svg :width :height :viewBox xmlns="http://www.w3.org/2000/svg">
    <path d="M0 22L2 24L14 12L2 0L0 2L10 12L0 22Z" :fill />
    <path d="M8 22L10 24L22 12L10 0L8 2L18 12L8 22Z" :fill />
  </svg>
</template>
