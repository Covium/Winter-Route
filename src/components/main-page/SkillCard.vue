<script setup lang="ts">
import InformationCard from '@/components/main-page/InformationCard.vue'
import CenterFrame from '@/components/utils/CenterFrame.vue'
import IconChecklist from '@/components/icons/IconChecklist.vue'
import { type PropType, onMounted } from 'vue'
import { PersonalSkill } from '@/features/types/personalSkill'
import { initFlowbite } from 'flowbite'

defineProps({
  skill: {
    type: Object as PropType<PersonalSkill>,
    required: true,
  },
})

onMounted(() => {
  initFlowbite()
})

const subskillsLearnedPercent = (skill: PersonalSkill) => {
  const preciseValue = (skill.subskillsLearned / skill.subskillsAmount) * 100
  return Math.round(preciseValue * 10) / 10
}
</script>

<template>
  <InformationCard>
    <div class="text-primary flex gap-6">
      <CenterFrame width="24px" height="24px" class="shrink-0"><IconChecklist /></CenterFrame>
      <span class="overflow-hidden text-lg break-words">{{ skill.name }}</span>
    </div>
    <hr />
    <p>
      <b>Изучено навыков:</b>{{ ' ' }}
      <span :data-tooltip-target="`tooltip-skill-progress-${skill.id}`" class="tooltipped-text">
        {{ skill.subskillsLearned }} из {{ skill.subskillsAmount }}
      </span>
    </p>
    <p><b>Текущий уровень:</b> {{ PersonalSkill.getSkillLevelName(skill.skillLevel) }}</p>
    <p><b>Следующий навык:</b> {{ skill.nextSubskill }}</p>
  </InformationCard>

  <div :id="`tooltip-skill-progress-${skill.id}`" class="tooltip invisible opacity-0">
    {{ subskillsLearnedPercent(skill) + '%' }}
    <div data-popper-arrow></div>
  </div>
</template>
