import { configureStore } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import dictReducer from "../features/dict/slice"

export function getStore(state: RootState) {
    return configureStore({
        reducer: {
            dict: dictReducer
        },
        preloadedState: state
    })
}