import React, { Component } from 'react'
import Context from "./contextBus"


const Connect = (cbk1,cbk2) =>{
    return (Com)=>{
        return class extends Component{
            render(){
                return <Context.Consumer>
                    {
                        ({state,changeState})=>{
                            let res = cbk1(state);
                            let res1 = cbk2(changeState)
                            return <Com {...res} {...res1} {...this.props} />
                        }
                    }
                </Context.Consumer>
            }
        }
    }
}
export default Connect;
