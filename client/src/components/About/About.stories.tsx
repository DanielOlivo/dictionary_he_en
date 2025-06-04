import type { Meta, StoryObj } from '@storybook/react-vite';
import { About } from './About';

const meta = {
  title: 'Dict/About',
  component: About,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof About>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}