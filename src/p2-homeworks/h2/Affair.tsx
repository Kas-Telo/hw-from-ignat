import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "./SuperButton/SuperButton";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>

            <div className={s.name}><span>{props.affair.name}</span></div>
            <div className={s.priority}><span> {props.affair.priority} </span></div>

            <div className={s.deleteButton}><SuperButton onClick={deleteCallback}>X</SuperButton></div>
        </div>
    )
}

export default Affair
