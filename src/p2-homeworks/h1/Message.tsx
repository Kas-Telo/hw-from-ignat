import React from 'react'
import style from './Message.module.css'

type MessagePropsType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>

            <img src={props.avatar} alt="avatar"/>

            <div className={style.messageInner}>
                <h4>{props.name}</h4>
                <p>{props.message}</p>
                <address>{props.time}</address>
            </div>
        </div>
    )
}

export default Message
