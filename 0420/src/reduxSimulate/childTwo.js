import React, { Component, Children } from 'react'
import Context from "../utils/contextBus"
// import Connect from "../utils/connect"
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as childTwoActions from "../utils/childTwoActions"
// import * as childTwoDispatch from "../utils/childTwoDispatch"


class ChildTwo extends Component {
    render() {
        let { height, age } = this.props;
        console.log(this.props);
        return (
            <div>
                ChildTwo
                <div>
                    {height}
                    {age}
                    <button onClick={() => this.props.changeAge(400)}>
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
export default connect(
    (state) => {
        // console.log("childTwo", state);
        return {
            ...state.OneReducer,
            ...state.TwoReducer
        }
    },
    (dispatch) => {
        //初步的形态
        //    return {
        //     changeHeight(num){
        //         dispatch(childTwoActions.changeHeight(num));
        //     }
        //    }


        return bindActionCreators(childTwoActions, dispatch)


        // return {
        //     changeHeight(num){
        //         dispatch({
        //             type:"ChildTwoReducer/height",
        //             data:num
        //         })
        //     }
        // }
    }
)(ChildTwo)
