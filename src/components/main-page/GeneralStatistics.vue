<script setup lang="ts">
import StatisticsSegment from '@/components/main-page/StatisticsSegment.vue'
import SkillCard from '@/components/main-page/SkillCard.vue'
import InstructorCard from '@/components/main-page/InstructorCard.vue'
import SportCentersCard from '@/components/main-page/SportCenterCard.vue'
import { computed } from 'vue'
import { skills, instructors, sportCenters } from '@/features/helpers/mockData'

const instructorsAmountText = computed(() => {
  let instructorsText = 'инструкторам'
  if (instructors.length % 10 === 1 && instructors.length % 100 !== 11)
    instructorsText = 'инструктору'

  return `${instructors.length} ${instructorsText}`
})

const sportCentersAmountText = computed(() => {
  let sportCenterText = 'спортивных центрах'
  if (sportCenters.length % 10 === 1 && sportCenters.length % 100 !== 11)
    sportCenterText = 'спортивном центре'

  return `${instructors.length} ${sportCenterText}`
})
</script>

<template>
  <div class="border-accent flex w-full flex-col rounded-[9px] border-2">
    <div class="bg-accent flex h-50 items-center px-18"><h1>Общая статистика</h1></div>
    <StatisticsSegment :title="`Ваши навыки: ${skills.length}`">
      <SkillCard v-for="skill in skills" :key="skill.id" :skill />
    </StatisticsSegment>
    <hr />
    <StatisticsSegment :title="`Вы записаны к ${instructorsAmountText}`">
      <InstructorCard v-for="instructor in instructors" :key="instructor.id" :instructor />
    </StatisticsSegment>
    <hr />
    <StatisticsSegment :title="`Вы состоите в ${sportCentersAmountText}`">
      <SportCentersCard v-for="sportCenter in sportCenters" :key="sportCenter.id" :sportCenter />
    </StatisticsSegment>
  </div>
</template>

<style scoped lang="css">
@import '@/assets/base.css';

hr {
  @apply text-accent-soft border-t-2;
}
</style>
