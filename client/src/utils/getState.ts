import type { RootState } from "../app/store";
import { getCard } from "./cardTerm";
import { faker } from "@faker-js/faker";

export function getState() {

    const empty: RootState = {
        dict: {
            serverStatus: false,
            pending: false,
            query: '',
            queries: {}
        }
    }

    const setQuery = (q: string): void => { empty.dict.query = q }

    const addRandomTerms = (count: number): void => {
        const query = faker.lorem.word()
        empty.dict.queries[query] = Array.from({length: count}, () => getCard())
    }

    return { empty, setQuery, addRandomTerms }
}


