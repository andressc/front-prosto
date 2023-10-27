import React from "react"

type AccordionTitlePropsType = {
    title: string
    collapsedHandler: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={props.collapsedHandler}>{props.title}</h3>
    )
}