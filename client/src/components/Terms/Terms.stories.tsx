import type { Meta, StoryObj } from '@storybook/react-vite';
import { Terms } from './Terms';
import { getState } from '../../utils/getState';
import { getStore } from '../../utils/getStore';
import { Provider } from 'react-redux';

const meta = {
  title: 'Dict/Terms',
  component: Terms,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Terms>;

export default meta;
type Story = StoryObj<typeof meta>;

const getOnPending = (): Story => {
  const { empty: state} = getState()
  state.dict.pending = true
  const store = getStore(state)

  return {
    decorators: [
      (Story) => <Provider store={store}><Story /></Provider>
    ]
  }
}

export const OnPending: Story = getOnPending()
