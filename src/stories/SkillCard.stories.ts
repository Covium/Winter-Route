import type { Meta, StoryObj } from '@storybook/vue3'
import SkillCard from '@/components/main-page/SkillCard.vue'
import { PersonalSkill } from '@/features/types/personalSkill'

const meta = {
  title: 'General Statistics/Skill Card',
  component: SkillCard,
  tags: ['autodocs'],
  argTypes: {
    skill: PersonalSkill,
  },
} satisfies Meta<typeof SkillCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    skill: {
      id: 0,
      name: 'Сноуборд',
      subskillsLearned: 5,
      subskillsAmount: 100,
      skillLevel: 0,
      nextSubskill: '1.6 Отработка поворотов',
    },
  },
}
