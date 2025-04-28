<script setup lang="ts">
defineProps({
  width: { type: String, default: '24' },
  height: { type: String, default: '22' },
  viewBox: { type: String, default: '0 0 24 22' },
  fill: { type: String, default: 'currentColor' },
})
</script>

<template>
  <svg :width :height :viewBox xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 22V0H12V4.88889H24V22H0ZM2.4 19.5556H4.8V17.1111H2.4V19.5556ZM2.4 14.6667H4.8V12.2222H2.4V14.6667ZM2.4 9.77778H4.8V7.33333H2.4V9.77778ZM2.4 4.88889H4.8V2.44444H2.4V4.88889ZM7.2 19.5556H9.6V17.1111H7.2V19.5556ZM7.2 14.6667H9.6V12.2222H7.2V14.6667ZM7.2 9.77778H9.6V7.33333H7.2V9.77778ZM7.2 4.88889H9.6V2.44444H7.2V4.88889ZM12 19.5556H21.6V7.33333H12V9.77778H14.4V12.2222H12V14.6667H14.4V17.1111H12V19.5556ZM16.8 12.2222V9.77778H19.2V12.2222H16.8ZM16.8 17.1111V14.6667H19.2V17.1111H16.8Z"
      :fill
    />
  </svg>
</template>
