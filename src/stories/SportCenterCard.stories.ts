import type { Meta, StoryObj } from '@storybook/vue3'
import SportCenterCard from '@/components/pages/main-page/SportCenterCard.vue'
import { SportCenter } from '@/features/types/sportCenter'

const meta = {
  title: 'General Statistics/Sport Center Card',
  component: SportCenterCard,
  tags: ['autodocs'],
  argTypes: {
    sportCenter: SportCenter,
  },
} satisfies Meta<typeof SportCenterCard>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    sportCenter: {
      id: 0,
      name: 'Цыпина гора',
      address:
        'Вологодская область, Кирилловский район, сельское поселение Ферапонтовское, деревня Оденьево, улица Волшебная, 2',
      phone: '+7 (800) 222-08-48',
      email: 'cipinagora@yandex.ru',
      skills: [0, 1],
    },
  },
}
