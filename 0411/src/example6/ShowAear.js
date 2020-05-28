import React, { useContext } from "react"
import { ColorContext } from "./Color"


export default () => {
    const { color } = useContext(ColorContext);
    return (<div style={{ color }}>
        字体颜色{color}
    </div>)
}