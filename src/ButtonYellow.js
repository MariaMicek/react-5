import React from 'react'
import { buttonYellow } from './ButtonYellow.module.css'
import { button } from './Buttons.module.css'

const ButtonYellow = () => (
    <div
        className={buttonYellow + ' ' + button}
    >
        ButtonYellow
    </div>
)

export default ButtonYellow