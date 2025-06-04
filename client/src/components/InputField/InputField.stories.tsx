import type { Meta, StoryObj } from '@storybook/react-vite';
import { InputField } from './InputField';
import { getStore } from '../../utils/getStore';
import { Provider } from 'react-redux';
import { getState } from '../../utils/getState';

const meta = {
  title: 'Dict/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

const getStory = (query: string, count: number): Story => {
    const { empty: state, addRandomTerms, setQuery } = getState()
    setQuery(query)
    addRandomTerms(count)
    const store = getStore(state)
    return {
        decorators: [
            (Story) => <Provider store={store}><Story /></Provider>
        ]
    }
}


export const Primary: Story = getStory("query", 0)
