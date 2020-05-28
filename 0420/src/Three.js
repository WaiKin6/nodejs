import React, { Component} from 'react'
import  myContext from "./utils/contextBus";

//这里有个没注意到的点 就是consumer会找寻它最近的provider *如果找不到它就会去 React.createContext({count:123}) 找 
export default class Three extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <myContext.Consumer>
                    {
                        
                        (value)=>{
                            return <div>
                                {value.count}
                                <button onClick={()=>{
                                    value.changeCount()
                                }}>
                                    点击修改count
                                </button>
                            </div>
                        }
                    }
               </myContext.Consumer>
            </div>
        )
    }
}
