import React from "react"

type StarPropsType = {
    setValue: () => void
    selected?: boolean
}
export function Star(props: StarPropsType) {

    return <span onClick={props.setValue}>{props.selected ? <b>Star</b> : "Star"}</span>
}