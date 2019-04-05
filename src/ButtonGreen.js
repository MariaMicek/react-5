import React from 'react'
import { buttonGreen } from './ButtonGreen.module.css'
import { button } from './Buttons.module.css'


const ButtonGreen = () => (
    <div
        className={buttonGreen + ' ' + button}
    >
        ButtonGreen
    </div>
)

export default ButtonGreen