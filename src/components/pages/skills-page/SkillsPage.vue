<script setup lang="ts">
import PageSection from '@/components/utils/PageSection.vue'
import { skillsList } from '@/features/helpers/mockData'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import IconArrowHead from '@/components/icons/IconArrowHead.vue'

onMounted(() => {
  initFlowbite()
})
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
      :class="index !== skillsList.length - 1 ? 'border-accent-soft border-b-2' : ''"
    >
      <button
        :id="`accordion-skill-heading-${skill.id}`"
        class="hover:bg-secondary flex w-full items-center justify-between px-10 py-3"
        :data-accordion-target="`#accordion-skill-body-${skill.id}`"
        :aria-controls="`accordion-skill-body-${skill.id}`"
      >
        <h2 class="text-lg">{{ skill.name }}</h2>
        <IconArrowHead data-accordion-icon class="h-10 rotate-180" />
      </button>
      <div
        :id="`accordion-skill-body-${skill.id}`"
        :aria-labelledby="`accordion-skill-heading-${skill.id}`"
        class="hidden"
      >
        <div v-for="level in skill.skillLevels" :key="level.id">
          <button
            :id="`accordion-level-heading-${level.id}`"
            class="hover:bg-secondary flex w-full items-center justify-between px-10 py-3"
            :data-accordion-target="`#accordion-level-body-${level.id}`"
            :aria-controls="`accordion-level-body-${level.id}`"
          >
            <span>{{ level.name }}</span>
            <IconArrowHead data-accordion-icon class="h-10 rotate-180" />
          </button>
          <div
            :id="`accordion-level-body-${level.id}`"
            :aria-labelledby="`accordion-level-heading-${level.id}`"
            class="hidden"
          >
            <div v-for="sublevel in level.sublevels" :key="sublevel.id">
              <span class="text-sm">{{ sublevel.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageSection>
</template>
