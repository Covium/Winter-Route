<script setup lang="ts">
defineProps({
  width: { type: String, default: '20' },
  height: { type: String, default: '24' },
  viewBox: { type: String, default: '0 0 20 24' },
  fill: { type: String, default: 'currentColor' },
})
</script>

<template>
  <svg :width :height :viewBox xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.5 20.4V18H2.875V9.6C2.875 7.94 3.36979 6.465 4.35938 5.175C5.34896 3.885 6.63542 3.04 8.21875 2.64V1.8C8.21875 1.3 8.39193 0.875 8.73828 0.525C9.08464 0.175 9.50521 0 10 0C10.4948 0 10.9154 0.175 11.2617 0.525C11.6081 0.875 11.7812 1.3 11.7812 1.8V2.64C13.3646 3.04 14.651 3.885 15.6406 5.175C16.6302 6.465 17.125 7.94 17.125 9.6V18H19.5V20.4H0.5ZM10 24C9.34688 24 8.78776 23.765 8.32266 23.295C7.85755 22.825 7.625 22.26 7.625 21.6H12.375C12.375 22.26 12.1424 22.825 11.6773 23.295C11.2122 23.765 10.6531 24 10 24Z"
      :fill
    />
  </svg>
</template>
