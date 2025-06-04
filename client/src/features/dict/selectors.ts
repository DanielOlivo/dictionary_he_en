import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import type { TermCardProps } from "../../components/TermCard/TermCard";

export const selectQuery = (state: RootState) => state.dict.query
export const selectQueries = (state: RootState) => state.dict.queries
export const selectIsPending = (state: RootState) => state.dict.pending

export const selectTerms = createSelector(
    selectQuery,
    selectQueries,
    (query, queries): TermCardProps[] => {
        if(query === ''){
            return []
        }

        if(query in queries){
            return queries[query].map((card, i) => ({...card, id: '', enableIdx: i, color: 'blue'}))
        }

        return []
    }
)