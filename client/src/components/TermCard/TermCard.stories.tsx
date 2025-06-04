import type { Meta, StoryObj } from '@storybook/react-vite'
import { TermCard, type TermCardProps } from './TermCard'
import { faker } from '@faker-js/faker'

const meta = {
  title: 'Dict/TermCard',
  component: TermCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TermCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const getCard = (): TermCardProps => ({
    id: '',
    enableIdx: 1,
    part: 'noun',
    color: '',
    menukad: faker.lorem.word(),
    chaser: faker.lorem.word(),
    meaning: faker.lorem.sentence()
})


export const Primary: Story = {
    args: getCard()
}