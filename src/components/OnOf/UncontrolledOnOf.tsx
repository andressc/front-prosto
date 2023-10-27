import s from "./OnOff.module.css"
import React, {useState} from "react"

type OnOfPropsType = {
    status: boolean
    observer: (status: boolean) => void
}
export const UncontrolledOnOf: React.FC<OnOfPropsType> = ({status, observer}) => {

    const [OnOff, setOnOff] = useState<boolean>(status)

    const on = OnOff && s.on
    const off = !OnOff && s.off

    const onclickOnHandler = () => {
        setOnOff(true)
        observer(true)
    }
    const onclickOffHandler = () => {
        setOnOff(false)
        observer(false)
    }

    return (
        <div className={s.wrapper}>
            <div onClick={onclickOnHandler} className={`${s.block} ${on}`}>ON</div>
            <div onClick={onclickOffHandler} className={`${s.block} ${off}`}>OFF</div>
            <div className={`${s.lamp} ${on} ${off}`}></div>
        </div>
    )
}