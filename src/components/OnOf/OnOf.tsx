import s from "./OnOff.module.css"
import React, {useState} from "react"

type OnOfPropsType = {
    status: boolean
    setOnOff: (status: boolean) => void
}
export const OnOf: React.FC<OnOfPropsType> = ({status, setOnOff}) => {


    const on = status && s.on
    const off = !status && s.off

    const onclickOnHandler = () => setOnOff(true)
    const onclickOffHandler = () => setOnOff(false)

    return (
        <div className={s.wrapper}>
            <div onClick={onclickOnHandler} className={`${s.block} ${on}`}>ON</div>
            <div onClick={onclickOffHandler} className={`${s.block} ${off}`}>OFF</div>
            <div className={`${s.lamp} ${on} ${off}`}></div>
        </div>
    )
}