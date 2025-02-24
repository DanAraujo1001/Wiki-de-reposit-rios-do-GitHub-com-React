import React from 'react'
import { InputContainer } from './styles.js';

export default function Input({value, onChange}) {
    return (
        <InputContainer>
            <input value={value} onChange={onChange} />
        </InputContainer>
    )
}
