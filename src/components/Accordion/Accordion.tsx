import React from "react"

type AccordionPropsType = {
    title: string,
    collapsed: boolean
    setCollapsed: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.title} collapsed={props.setCollapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </>
    )
}


type AccordionTitlePropsType = {
    title: string
    collapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.collapsed}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion