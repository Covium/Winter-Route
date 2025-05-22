<script setup lang="ts">
import PageSection from '@/components/utils/PageSection.vue'
import StatisticsSegment from '@/components/pages/main-page/StatisticsSegment.vue'
import SkillCard from '@/components/pages/main-page/SkillCard.vue'
import InstructorCard from '@/components/pages/main-page/InstructorCard.vue'
import SportCentersCard from '@/components/pages/main-page/SportCenterCard.vue'
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
  <PageSection title="Общая статистика">
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
  </PageSection>
</template>

<style scoped lang="css">
@import '@/assets/base.css';

hr {
  @apply text-accent-soft border-t-2;
}
</style>
