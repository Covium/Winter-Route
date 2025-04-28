<script setup lang="ts">
defineProps({
  width: { type: String, default: '20' },
  height: { type: String, default: '16' },
  viewBox: { type: String, default: '0 0 20 16' },
  fill: { type: String, default: 'currentColor' },
})
</script>

<template>
  <svg :width :height :viewBox xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.55 15.5375L0 11.9875L1.4 10.5875L3.525 12.7125L7.775 8.46249L9.175 9.88749L3.55 15.5375ZM3.55 7.53749L0 3.98749L1.4 2.58749L3.525 4.71249L7.775 0.462494L9.175 1.88749L3.55 7.53749ZM11 13.5375V11.5375H20V13.5375H11ZM11 5.53749V3.53749H20V5.53749H11Z"
      :fill
    />
  </svg>
</template>
