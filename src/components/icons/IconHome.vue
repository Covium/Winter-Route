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
    <path d="M0.5 24V8L11 0L21.5 8V24H13.625V14.6667H8.375V24H0.5Z" :fill />
  </svg>
</template>
