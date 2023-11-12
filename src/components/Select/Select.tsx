import React, {JSX, KeyboardEvent, useEffect, useState} from "react"
import styles from "./Select.module.css"

export type SelectType = { value: string, title: string }

type PropsType = {
    selectArr: SelectType[]
    selectedValue: string
    setSelectedValue: (value: string) => void
}

export const Select: React.FC<PropsType> = ({selectArr, selectedValue, setSelectedValue}) => {

    const [isSelect, setIsSelect] = useState<boolean>(false)
    const [hoveredItem, setHoveredItem] = useState<string>(selectedValue)

    useEffect(() => {
        setHoveredItem(selectedValue)
    }, [selectedValue])

    const isSelectHandler = () => {
        setIsSelect(!isSelect)
    }

    const setValue = () => {
        setSelectedValue(hoveredItem)
        setIsSelect(false)
    }

    const onMouseHandler = (value: string) => {
        setHoveredItem(value)
    }

    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {

        if(e.key === "ArrowUp" && selectArr[+hoveredItem-1]) {
            setSelectedValue(selectArr[+hoveredItem-1].value)
        }

        if(e.key === "ArrowDown" && selectArr[+hoveredItem+1]) {
            setSelectedValue(selectArr[+hoveredItem+1].value)
        }

        if(e.key === "Enter") {
            setValue()
        }

        if(e.key === "Escape") {
            isSelectHandler()
        }
    }

    const selected = selectArr.find(v => v.value === selectedValue)

    const selectList: JSX.Element[] = selectArr.map((v, i) => <div
        className={`${styles.blockSelectValue} ${v.value === hoveredItem && styles.blockSelectValueActive}`}
        key={i}
        onClick={setValue}
        onMouseOver={() => onMouseHandler(v.value)}
    >{v.title}</div>)

    return (
        <div className={styles.blockWrapper} onKeyDown={(e) => onKeyDownHandler(e)}>
            <div className={styles.blockSelected}
                 onClick={isSelectHandler}
                // onBlur={isSelectCloseHandler}
                 tabIndex={0}
            >
                {selected && selected.title}
            </div>
            <div className={`${styles.blockSelect} ${isSelect ? styles.blockSelectUnHide : styles.blockSelectHide}`}>
                {selectList}
            </div>
        </div>
    )
}