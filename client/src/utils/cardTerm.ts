import type { TermCardProps } from "../components/TermCard/TermCard"
import { faker } from "@faker-js/faker"
import { v4 as uuid } from 'uuid'

export const getCard = (): TermCardProps => ({
    id: uuid(),
    enableIdx: 0,
    part: 'noun',
    color: '',
    menukad: faker.lorem.word(),
    chaser: faker.lorem.word(),
    meaning: faker.lorem.sentence()
})