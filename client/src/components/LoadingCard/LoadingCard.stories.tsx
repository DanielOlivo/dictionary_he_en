import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoadingCard } from './LoadingCard';

const meta = {
  title: 'Dict/LoadingCard',
  component: LoadingCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}