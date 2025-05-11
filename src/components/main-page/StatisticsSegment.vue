<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="desktop:px-27 flex flex-col gap-6 px-18 pt-12 pb-18">
    <h2 class="text-lg">{{ title }}</h2>
    <div class="flex gap-12 overflow-x-auto rounded-[5px]"><slot /></div>
  </div>
</template>
