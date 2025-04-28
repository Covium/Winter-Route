<template>
  <div
    class="border-primary text-background-contrast flex max-w-300 min-w-300 flex-col gap-6 rounded-[5px] border-1 bg-[image:var(--pattern-bg)] p-9 text-sm"
  >
    <slot />
  </div>
</template>

<style lang="css">
@reference '@/assets/base.css';

hr {
  @apply text-primary;
}

.contact {
  @apply hover:text-accent decoration-accent flex w-fit gap-3 hover:underline;
}
</style>
