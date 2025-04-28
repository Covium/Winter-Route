<template>
  <div
    class="border-primary text-background-contrast small-text flex max-w-300 min-w-300 flex-col gap-6 rounded-[5px] border-1 bg-[url(@/assets/card-background.svg)] p-9"
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

.card-name > span {
  @apply max-w-full truncate;
}
</style>
