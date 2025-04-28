<template>
  <div
    class="bg-background flex justify-end overflow-hidden rounded-tl-[7px] pt-2 pl-2 align-bottom"
  >
    <div
      class="border-primary h-full w-full overflow-auto rounded-tl-[5px] border-t-2 border-l-2 px-18"
    >
      <div class="mx-auto h-fit max-w-720 min-w-360 py-18">
        <RouterView />
      </div>
    </div>
  </div>
</template>
