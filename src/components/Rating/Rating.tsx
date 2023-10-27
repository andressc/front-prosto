import React, {JSX} from "react"

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    setValue: (value: RatingValueType) => void
}

const style = {
    display: "flex",
    gap: "10px"
}

export function Rating(props: RatingPropsType) {

    const rating: RatingValueType[] = [1, 2, 3, 4, 5]

    const starList: JSX.Element[] = rating.map((data, i) =>
        <Star selected={i < props.value && true} key={i} id={data} setValue={props.setValue}/>
    )

    return (
        <div style={style}>
            {starList}
        </div>
    )
}

type StarPropsType = {
    id: RatingValueType
    selected?: boolean
    setValue: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {

    const onClickHandler = () => {
        props.setValue(props.id)
    }

    return <span onClick={onClickHandler}>{props.selected ? <b>Star</b> : "Star"}</span>
}