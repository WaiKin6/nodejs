import React, { Component } from 'react'
import store from '../store'
import {changeInputAction} from "../store/actionCreate"

export default class focusAreaUi extends Component {
    render() {
        return (
            <div>
                <input type="text"
                    value={store.getState().inputValue} onChange={(e) => {
                        let action = changeInputAction(e.target.value);
                        store.dispatch(action)
                    }} />
                <button onClick={() => this.testDispatch}>关注领域</button>
            </div>
        )
    }
}
