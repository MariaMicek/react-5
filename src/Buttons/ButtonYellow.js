import React from 'react'
import { button, buttonYellow } from './buttons.styles.js'


const ButtonYellow = () => (
    <div
        style={{
            ...button,
            ...buttonYellow,
        }}
        // style={Object.assign({}, button, buttonYellow)}
    >
        ButtonYellow
    </div>
)

export default ButtonYellow