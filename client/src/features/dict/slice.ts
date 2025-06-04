import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { checkServer, requestQuery } from "./thunks";

export interface Card {
    part: string
    menukad: string
    chaser: string
    meaning: string
}

type Queries = { [P: string]: Card[] }

interface DictState {
    serverStatus: boolean
    pending: boolean
    query: string
    queries: Queries
}

const initialState: DictState = {
    serverStatus: false,
    pending: false,
    query: "",
    queries: {}
}

export const slice = createSlice({
    name: 'dict',
    initialState,
    reducers: {
        updateQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload
            state.pending = action.payload !== ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestQuery.rejected, (state, action) => {
                state.pending = false
                console.log('ERROR', action.error)
            })
            .addCase(requestQuery.fulfilled, (state, action) => {
                state.pending = false
                const query = action.meta.arg
                const cards = action.payload
                if(query){
                    state.queries[query] = cards
                }
            })

            .addCase(checkServer.rejected, (state) => {
                state.serverStatus = false
            })
            .addCase(checkServer.fulfilled, (state, action) => {
                state.serverStatus = action.payload
            })
    }
})

export default slice.reducer
export const { updateQuery } = slice.actions

