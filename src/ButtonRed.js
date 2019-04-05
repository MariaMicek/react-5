import React from 'react'
import { button, buttonRed } from './buttons.styles.js'

const ButtonRed = () => (
    <div
        style={{
            ...button,
            ...buttonRed,
        }}
        // style={Object.assign({}, button, buttonRed)}
    >
        ButtonRed
    </div>
)

export default ButtonRed