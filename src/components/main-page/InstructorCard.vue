<script setup lang="ts">
import InformationCard from '@/components/main-page/InformationCard.vue'
import CenterFrame from '@/components/utils/CenterFrame.vue'
import IconPerson from '@/components/icons/IconPerson.vue'
import IconPhoneHandle from '@/components/icons/IconPhoneHandle.vue'
import IconAt from '@/components/icons/IconAt.vue'
import { skillsList } from '@/features/helpers/mockData'
import { type PropType } from 'vue'
import { Instructor } from '@/features/types/instructor'
import { getLocaleBirthDate, getAgeGroup, getAgeText } from '@/features/helpers/ageGroups'
import { getCleanedPhoneNumber } from '@/features/helpers/misc'

defineProps({
  instructor: {
    type: Object as PropType<Instructor>,
    required: true,
  },
})

function getSkillNames(skillIds: number[]): string[] {
  const skillNames = []
  for (const skillId of skillIds) {
    const skillName = skillsList.find((skill) => skill.id === skillId)?.name || '<Неизвестный>'
    skillNames.push(skillName)
  }

  return skillNames
}
</script>

<template>
  <InformationCard>
    <div class="text-primary flex gap-6">
      <CenterFrame width="72px" height="72px" class="bg-primary relative shrink-0 rounded-[5px]">
        <IconPerson class="text-primary-contrast" />
        <CenterFrame
          width="20px"
          height="20px"
          class="border-primary absolute -top-5 -left-5 cursor-help rounded-full border-1 select-none"
          :class="instructor.officiality ? 'bg-[gold]' : 'bg-[silver]'"
          :title="instructor.officiality ? 'Официальный инструктор' : 'Неофициальный инструктор'"
        >
          {{ instructor.officiality ? 'О' : 'Н' }}
        </CenterFrame>
      </CenterFrame>
      <div class="flex flex-col gap-0 truncate text-lg [&>*]:max-w-full [&>*]:text-ellipsis">
        <span>{{ instructor.surname }}&nbsp;</span>
        <span>{{ instructor.name }}&nbsp;</span>
        <span>{{ instructor.patronymic }}</span>
      </div>
    </div>
    <hr />
    <div class="flex justify-between">
      <p>
        {{ Instructor.getSexName(instructor.sex) }},
        <span
          :title="`${getLocaleBirthDate(instructor.birthDate)}\nГруппа ${getAgeGroup(instructor.birthDate)}`"
          class="titled-text"
        >
          {{ getAgeText(instructor.birthDate) }}
        </span>
      </p>
      <p>№{{ instructor.id }}</p>
    </div>
    <p><b>Навыки:</b> {{ getSkillNames(instructor.skills).join(', ') }}.</p>
    <div class="flex flex-col">
      <p><b>Контакты:</b></p>
      <a :href="`tel:${getCleanedPhoneNumber(instructor.phone)}`" class="contact">
        <CenterFrame width="16px" height="16px"><IconPhoneHandle /></CenterFrame>
        {{ instructor.phone }}
      </a>
      <a :href="`mailto:${instructor.email}`" class="contact">
        <CenterFrame width="16px" height="16px"><IconAt /></CenterFrame>
        {{ instructor.email }}
      </a>
    </div>
  </InformationCard>
</template>
