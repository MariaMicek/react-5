import React from 'react'
// import style from'./ButtonGreen.module.css'         //import domyślny
import {jfddl7Button} from'./ButtonGreen.module.css'    //import nazwany, znajduje nazwę klasy

const ButtonGreen = () => (
    <div
        // className={style['jfddl7Button']}  
        // className={style.jfddl7Button}
        className={jfddl7Button}
    >
        ButtonGreen
    </div>
)

export default ButtonGreen