import type { Meta, StoryObj } from '@storybook/react-vite';
import App from './App';
import { getState } from './utils/getState';
import { getStore } from './utils/getStore';
import { Provider } from 'react-redux';
import { delay, http, HttpResponse } from 'msw';
import { baseUrl } from './utils/baseUrl';
import type { TermCardProps } from './components/TermCard/TermCard';
import { v4 as uuid } from 'uuid'

const meta = {
  title: 'App',
  component: App,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

const { empty: state } = getState()
const store = getStore(state)

export const Primary: Story = {
    decorators: [
        (Story) => (
            <Provider store={store}>
                <div className='w-[800px] h-[600px] border border-black'>
                    <Story />
                </div>
            </Provider>
        )
    ],
    parameters: {
        msw: {
            handlers: [
                http.get(new URL('/api', baseUrl).href, async ({request}) => {
                    const url = new URL(request.url)
                    console.log('handling: ', url)
                    const word = url.searchParams.get('word')
                    await delay(1000)
                    if(word){
                        const card: TermCardProps = {
                            id: uuid(),
                            enableIdx: 0,
                            menukad: word,
                            chaser: word,
                            meaning: word,
                            part: 'noun',
                            color: ''
                        }

                        const length = Math.floor(Math.random() * 10) + 1
                        const cards = Array.from({length}, () => card)
                        return HttpResponse.json({cards})

                    }
                    return HttpResponse.json({cards: []})
                })
            ]
        }
    }
}

