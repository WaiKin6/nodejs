import React, { Component } from 'react'
import TestChildren from "./TestChildren"
import myContext from "./utils/contextBus"


console.log(myContext);


export default class Test extends Component {
    state={
        count:60
    }
    changeCount=()=>{
        this.setState({
            count:666
        })
    }
    render() {
        return (
            <div>
             Test
            {/* <myContext.Provider value={{count:this.state.count,changeCount:this.changeCount}}> */}
                <TestChildren />
            {/* </myContext.Provider> */}
            </div>
        )
    }
}
