import React, { Component } from 'react'
import Context from "../utils/contextBus"
import Connect from '../utils/connect';

class ChildOne extends Component {
    render() {
        let {num} = this.props;
        return (
            <div>
                <div>
                    {num}
                </div>
                {/* <Context.Consumer>
                    {
                        ({ ChildOneReducer: { num } }) => {
                            return <div>
                                {num}
                            </div>
                        }
                    }
                </Context.Consumer> */}
            </div>
        )
    }
}
export default Connect(
    (state) => {
        console.log("childOne",state);
        return {
            ...state.ChildOneReducer
        }
    },
    ()=>{
        return{
            aa:22
        }
    }
)(ChildOne);