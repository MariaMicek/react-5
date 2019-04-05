import React from 'react'
import { buttonRed } from './ButtonRed.module.css'
import { button } from './Buttons.module.css'

const ButtonRed = () => (
    <div
        className={buttonRed + ' ' + button}
    >
        ButtonRed
    </div>
)

export default ButtonRed