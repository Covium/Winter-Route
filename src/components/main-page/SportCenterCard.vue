<script setup lang="ts">
import InformationCard from '@/components/main-page/InformationCard.vue'
import CenterFrame from '@/components/utils/CenterFrame.vue'
import IconOfficeBuilding from '@/components/icons/IconOfficeBuilding.vue'
import IconPhoneHandle from '@/components/icons/IconPhoneHandle.vue'
import IconAt from '@/components/icons/IconAt.vue'
import { type PropType } from 'vue'
import { SportCenter } from '@/features/types/sportCenter'
import { getCleanedPhoneNumber } from '@/features/helpers/misc'

defineProps({
  sportCenter: {
    type: Object as PropType<SportCenter>,
    required: true,
  },
})
</script>

<template>
  <InformationCard>
    <div class="text-primary flex gap-6">
      <CenterFrame width="24px" height="24px"><IconOfficeBuilding /></CenterFrame>
      <span class="text-lg">{{ sportCenter.name }}</span>
    </div>
    <hr />
    <p><b>Адрес:</b> {{ sportCenter.address }}</p>
    <div class="flex flex-col">
      <p><b>Контакты:</b></p>
      <a :href="`tel:${getCleanedPhoneNumber(sportCenter.phone)}`" class="contact">
        <CenterFrame width="16px" height="16px"><IconPhoneHandle /></CenterFrame>
        {{ sportCenter.phone }}
      </a>
      <a :href="`mailto:${sportCenter.email}`" class="contact">
        <CenterFrame width="16px" height="16px"><IconAt /></CenterFrame>
        {{ sportCenter.email }}
      </a>
    </div>
  </InformationCard>
</template>
