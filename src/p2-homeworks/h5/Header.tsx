import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from './Routes'
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.navlinksContainer}>
            <div><NavLink to={PATH.PRE_JUNIOR}>pre-junior</NavLink></div>
            <div><NavLink to={PATH.JUNIOR}>junior</NavLink></div>
            <div><NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink></div>
        </div>
    )
}

export default Header
