import React, { Component } from 'react'
import Three from "./Three"

export default class TestChildren extends Component {
    render() {
        return (
            <div>
                <Three>
                    Three123
                </Three>
            </div>
        )
    }
}
