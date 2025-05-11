<script setup lang="ts">
import { isMobile } from '@/features/helpers/isMobile'
</script>

<template>
  <div
    class="bg-background flex justify-end overflow-hidden align-bottom"
    :class="isMobile ? 'pb-2' : 'rounded-tl-[7px] pt-2 pl-2'"
  >
    <div
      class="border-primary desktop:px-18 desktop:rounded-tl-[5px] h-full w-full overflow-auto"
      :class="isMobile ? 'border-b-2' : 'border-t-2 border-l-2'"
    >
      <div class="desktop:py-18 mx-auto h-fit" :class="isMobile ? '' : 'max-w-720 min-w-360'">
        <RouterView />
      </div>
    </div>
  </div>
</template>
