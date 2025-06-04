import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import { v4 as uuid } from 'uuid'
import userEvent, { type UserEvent } from '@testing-library/user-event'
import { setupServer, SetupServerApi } from 'msw/node'

import { http, HttpResponse } from 'msw'

import { getState } from '../../utils/getState'
import { getStore } from '../../utils/getStore'
import { InputField } from './InputField'
import { Provider } from 'react-redux'
import { baseUrl } from '../../utils/baseUrl'
import type { TermCardProps } from '../TermCard/TermCard'




describe('Input Field test', () => {

    let user: UserEvent
    let server: SetupServerApi

    beforeAll(() => {
        user = userEvent.setup()

        const handlers = [
            http.get(new URL('/api', baseUrl).href, () => {
                const card: TermCardProps = {
                    id: uuid(),
                    enableIdx: 0,
                    menukad: 'q',
                    chaser: '',
                    meaning: '',
                    part: '',
                    color: ''
                }
                return HttpResponse.json({cards: [ card ]})
            })
        ]

        server = setupServer(...handlers)
        server.listen() 
    })

    afterAll(() => {
        server.close()
    })



    it('typing', async () => {
        const { empty: state } = getState()
        expect(state).toBeDefined()

        const store = getStore(state)
        expect(store).toBeDefined()

        render(<Provider store={store}><InputField /></Provider>) 
        
        const field = screen.getByLabelText('input-field') 
        expect(field).toBeInTheDocument()

        await user.type(field, 'q')

        expect(store.getState().dict.query).toEqual('q')

        await waitFor(() => expect('q' in store.getState().dict.queries).toBeTruthy())

        const [card] = store.getState().dict.queries['q']
        expect(card).toBeDefined()
        expect(card.menukad).toEqual('q')
    })


})