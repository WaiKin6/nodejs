import React, { Component } from 'react'
import Context from "../utils/contextBus"


export default class Provider extends Component {
    constructor(props){
        super(props)

        this.state ={
            //这里是只把store给解构出来，把this.props.children 给过滤掉
            ...props.store
        }
    }
    changeState=({type,data})=>{
        let [reducer,target] = type.split("/");
        console.log(reducer,target);
        
        this.setState({
            [reducer]:{
                ...this.state[reducer],
                [target]:data
            }
        })
    }
    render() {
        return (
            <div>
                <Context.Provider value={{state:{...this.state},changeState:this.changeState}}>
                {this.props.children}
                </Context.Provider>
            </div>
        )
    }
}
