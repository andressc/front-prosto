import React, {useState} from "react"
import "./App.css"
import Accordion from "./components/Accordion/Accordion"
import {Rating, RatingValueType} from "./components/Rating/Rating"
import {UncontrolledOnOf} from "./components/OnOf/UncontrolledOnOf"
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion"
import {UncontrolledRating} from "./components/Rating/UncontrolledRating"
import {Select, SelectType} from "./components/Select/Select"

type PageTitlePropsType = {
    title: string
}

function App() {

    const [value, setValue] = useState<RatingValueType>(0)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [OnOff, setOnOff] = useState<boolean>(true)

    const collapsedAccordion = () => {
        setCollapsed(!collapsed)
    }

    const selectArr: SelectType[] = [
        {value: "0", title: ""},
        {value: "1", title: "JS"},
        {value: "2", title: "CSS"},
        {value: "3", title: "TS"}
    ]

    const [selectedValue, setSelectedValue] = useState<string>(selectArr[0].value)

    return (
        <div className="App">
            <UncontrolledAccordion title="one accordion"/>

            {/*<OnOf status={OnOff} setOnOff={setOnOff}/>*/}

            {/*<Select selectArr={selectArr} selectedValue={selectedValue} setSelectedValue={setSelectedValue}/>*/}

            {/*<UncontrolledOnOf status={true} observer={setOnOff}/>
            <p>{OnOff.toString()}</p>

            <p>ControlledRating</p>
            <div>
                <Rating value={value} setValue={setValue}/>
            </div>

            <p>UncontrolledRating</p>
            <UncontrolledRating/>

            <p>ControlledAccordion</p>
            <Accordion title="one accordion" collapsed={collapsed} setCollapsed={collapsedAccordion}/>

            <p>UncontrolledAccordion</p>
            <UncontrolledAccordion title="one accordion"/>*/}
            {/*        <PageTitle title="This is app component" />
          Article 1
        <Rating value={0} />
        <Accordion title="one accordion" collapsed={true} />
          <PageTitle title="New title component" />
          Article 2
          <Rating value={5} />
          <Accordion title="two accordion" />*/}
        </div>
    )
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App
