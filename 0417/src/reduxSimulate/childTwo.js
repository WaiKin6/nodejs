import React, { Component, Children } from 'react'
import Context from "../utils/contextBus"
import Connect from "../utils/connect"

class ChildTwo extends Component {
    render() {
        let { height,age} = this.props;
        return (
            <div>
                ChildTwo
                <div>
                    {height}
                    {age}
                    <button onClick={()=>this.props.changeHeight(400)}>
                    点击修改height
                    </button>
                </div>
                {/* <Context.Consumer>
                    {
                        //这种解构方式之前写得少 得记一下
                        ({ChildTowReducer:{height}})=>{
                           return <div>
                               {height}
                           </div>
                        }
                    }
                </Context.Consumer> */}
            </div>
        )
    }
}
export default Connect(
    (state)=>{
        console.log("childTwo",state);
        return {
            ...state.ChildTwoReducer,
            ...state.SonReducer
        }
    },
    (dispatch)=>{
        return {
            changeHeight(num){
                dispatch({
                    type:"ChildTwoReducer/height",
                    data:num
                })
            }
        }
    }
)(ChildTwo)
