<script setup lang="ts">
import PageSection from '@/components/utils/PageSection.vue'
import { skillsList } from '@/features/helpers/mockData'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import IconArrowHead from '@/components/icons/IconArrowHead.vue'

onMounted(() => {
  initFlowbite()
})

function getLevelActiveColor(active: number) {
  switch (active) {
    default:
      return 'bg-gray-400'
    case 1:
      return 'bg-yellow-400'
    case 2:
      return 'bg-green-600'
  }
}
</script>

<template>
  <PageSection
    title="Паспорт ученика"
    data-accordion="open"
    data-active-classes="bg-secondary text-secondary-contrast"
    data-inactive-classes="text-secondary-contrast"
  >
    <div
      v-for="(skill, index) in skillsList"
      :key="skill.id"
      :class="index !== skillsList.length - 1 ? 'border-accent border-b-2' : ''"
    >
      <button
        :id="`accordion-skill-heading-${skill.id}`"
        class="hover:bg-secondary tablet:h-40 flex h-60 w-full cursor-pointer items-center justify-between gap-10 px-10"
        :data-accordion-target="`#accordion-skill-body-${skill.id}`"
        :aria-controls="`accordion-skill-body-${skill.id}`"
      >
        <div
          class="h-9 w-9 shrink-0 rounded-full"
          :class="getLevelActiveColor(skill.active!)"
        ></div>
        <h2 :id="skill.name" class="w-full text-left text-lg">{{ skill.name }}</h2>
        <IconArrowHead data-accordion-icon class="h-10 shrink-0 rotate-180" />
      </button>
      <div
        :id="`accordion-skill-body-${skill.id}`"
        :aria-labelledby="`accordion-skill-heading-${skill.id}`"
        class="hidden"
      >
        <div v-for="level in skill.skillLevels" :key="level.id">
          <button
            :id="`accordion-level-heading-${skill.id}-${level.id}`"
            class="hover:bg-secondary tablet:h-40 flex h-60 w-full cursor-pointer items-center justify-between gap-10 px-10"
            :data-accordion-target="`#accordion-level-body-${skill.id}-${level.id}`"
            :aria-controls="`accordion-level-body-${skill.id}-${level.id}`"
          >
            <div
              class="h-9 w-9 shrink-0 rounded-full"
              :class="getLevelActiveColor(level.active!)"
            ></div>
            <span class="text-bold w-full text-left">{{ level.name }}</span>
            <IconArrowHead data-accordion-icon class="h-10 shrink-0 rotate-180" />
          </button>
          <div
            :id="`accordion-level-body-${skill.id}-${level.id}`"
            :aria-labelledby="`accordion-level-heading-${skill.id}-${level.id}`"
            class="hidden"
          >
            <div
              v-for="sublevel in level.sublevels"
              :key="sublevel.id"
              class="tablet:h-40 ml-20 flex h-60 items-center gap-10 px-10"
            >
              <div
                class="h-9 w-9 shrink-0 rounded-full"
                :class="getLevelActiveColor(sublevel.active!)"
              ></div>
              <span class="select-none">{{ sublevel.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageSection>
</template>
