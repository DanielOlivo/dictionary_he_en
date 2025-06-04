import { describe, it, assert, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { getCard } from '../../utils/cardTerm'
import { TermCard } from './TermCard'

describe('TermCard', () => {

    it('render', () => {
        const props = getCard()
        assert.isOk(props)

        render(<TermCard {...props} />)

        expect(screen.getByText(props.menukad)).toBeInTheDocument()
        expect(screen.getByText(new RegExp(props.chaser))).toBeInTheDocument()
        expect(screen.getByText(props.meaning)).toBeInTheDocument()
        expect(screen.getByText(props.part)).toBeInTheDocument()
    })



})