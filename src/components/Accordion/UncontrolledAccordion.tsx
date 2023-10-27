import React, {useState} from "react"
import {AccordionTitle} from "./AccordionTitle"
import {AccordionBody} from "./AccordionBody"

type AccordionPropsType = {
    title: string,
}

function UncontrolledAccordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState<boolean>(true)

    const collapsedHandler = () => setCollapsed(!collapsed)

    return (
        <>
            <AccordionTitle title={props.title} collapsedHandler={collapsedHandler} />
            {!collapsed && <AccordionBody/>}
        </>
    )
}

export default UncontrolledAccordion