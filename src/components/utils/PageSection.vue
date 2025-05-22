<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section
    class="border-accent tablet:rounded-[9px] tablet:border-2 tablet:overflow-clip flex w-full flex-col border-b-2"
  >
    <div v-if="title" class="bg-accent sticky top-0 z-10 flex h-50 items-center px-18">
      <h1 class="text-accent-contrast text-xl">{{ title }}</h1>
    </div>
    <slot />
  </section>
</template>
