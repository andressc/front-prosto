import React, {useReducer} from "react"
import {AccordionTitle} from "./AccordionTitle"
import {AccordionBody} from "./AccordionBody"

type AccordionPropsType = {
    title: string,
}

type  ActionType = {
    type: string,
    [key: string]: any
}

type StateType = {
    collapsed: boolean
}

const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default: throw new Error("Bad ActionType")
    }
}

function UncontrolledAccordion(props: AccordionPropsType) {

    //const [collapsed, setCollapsed] = useState<boolean>(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const collapsedHandler = () => dispatch({type: TOGGLE_COLLAPSED})

    return (
        <>
            <AccordionTitle title={props.title} collapsedHandler={collapsedHandler}/>
            {!state.collapsed && <AccordionBody/>}
        </>
    )
}

export default UncontrolledAccordion