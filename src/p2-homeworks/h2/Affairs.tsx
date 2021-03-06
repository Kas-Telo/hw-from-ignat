import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "./SuperButton/SuperButton";
import s from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>;
    setFilter: (filter: FilterType) => void;
    deleteAffairCallback: (_id: number) => void;
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all');
    } // need to fix
    const setHigh = () => {
        props.setFilter('high');
    }
    const setMiddle = () => {
        props.setFilter('middle');
    }
    const setLow = () => {
        props.setFilter('low');
    }

    return (
        <div className={s.container}>

            <div className={s.affairsContainer}>{mappedAffairs}</div>
            <div className={s.filterButtons}>
                <SuperButton className={s.btn} onClick={setAll}>All</SuperButton>
                <SuperButton className={s.btn} onClick={setHigh}>High</SuperButton>
                <SuperButton className={s.btn} onClick={setMiddle}>Middle</SuperButton>
                <SuperButton className={s.btn} onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
