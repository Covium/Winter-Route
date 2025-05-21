import type { Meta, StoryObj } from '@storybook/vue3'
import InstructorCard from '@/components/pages/main-page/InstructorCard.vue'
import { Instructor } from '@/features/types/instructor'

const meta = {
  title: 'General Statistics/Instructor Card',
  component: InstructorCard,
  tags: ['autodocs'],
  argTypes: {
    instructor: Instructor,
  },
} satisfies Meta<typeof InstructorCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    instructor: {
      id: 35021337,
      surname: 'Иванов',
      name: 'Иван',
      patronymic: 'Иванович',
      sex: 0,
      birthDate: 755211600000,
      skills: [0, 1],
      phone: '+7 (912) 345-67-89',
      email: 'ivanov.ivan@mail.ru',
      officiality: 0,
    },
  },
}
