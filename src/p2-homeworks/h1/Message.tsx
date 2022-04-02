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
        <div className={style.messageContainer}>
            <div className={style.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={style.hookContainer}>
                <div className={style.hooks}>
                    <div className={style.hook1}>
                        <div className={style.hook2}></div>
                    </div>

                </div>
            </div>
            <div className={style.messageInner}>
                <h4 className={style.name}>{props.name}</h4>
                <p >{props.message}</p>
                <address>{props.time}</address>
            </div>
        </div>
    )
}

export default Message
