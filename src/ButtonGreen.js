import React from 'react'
import { button, buttonGreen } from './buttons.styles.js'

const ButtonGreen = () => (
    <div
        style={{
            ...button,
            ...buttonGreen,
        }}
        // style={Object.assign({}, button, buttonGreen)}
    >
        ButtonGreen
    </div>
)

export default ButtonGreen