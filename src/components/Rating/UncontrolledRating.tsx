import React, {useState} from "react"
import {Star} from "./Star"

export function UncontrolledRating() {

    const style = {
        display: "flex",
        gap: "10px"
    }

    const rating: undefined[] = [...Array(5)]

    const [value, setValue] = useState<number>(0)

    return (
        <div style={style}>
            {rating.map((data, i) =>
                 <Star selected={i < value && true} key={i} setValue={() => setValue(i+1)} />
            )}
        </div>
    )
}