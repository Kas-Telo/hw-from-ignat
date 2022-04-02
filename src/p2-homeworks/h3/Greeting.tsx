import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "./SuperButton/SuperButton";
import SuperInputText from "./SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass; // need to fix with (?:)

    return (
        <div>
            <SuperInputText value={name}
                            onKeyPress={onEnter}
                            onChange={setNameCallback}
                            onBlur={setNameCallback}
                            className={inputClass}/>
            <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
            <span>{totalUsers}</span>
            <div>
                <span className={s.errorMessage}>{error}</span>
            </div>

        </div>
    )
}

export default Greeting
