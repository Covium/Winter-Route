<script setup lang="ts">
defineProps({
  width: { type: String, default: '24' },
  height: { type: String, default: '20' },
  viewBox: { type: String, default: '0 0 24 20' },
  fill: { type: String, default: 'currentColor' },
})
</script>

<template>
  <svg :width :height :viewBox xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.8182 15.5556V7.88889L12 13.3333L0 6.66667L12 0L24 6.66667V15.5556H21.8182ZM12 20L4.36364 15.7778V10.2222L12 14.4444L19.6364 10.2222V15.7778L12 20Z"
      :fill
    />
  </svg>
</template>
