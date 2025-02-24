import React from 'react'
import { ButtonContainer } from './styles.js';

export default function Button({onClick}) {
    return (
        <ButtonContainer onClick={onClick}>
            Procurar
        </ButtonContainer>
    )
}
