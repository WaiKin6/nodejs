import React, { Component } from 'react'
import {connect} from "react-redux"
import FocusAreaUi from "../ui/focusAreaUi"
import "../mock"
import axios from "axios"
import {getList,getMyListAction} from "../store/actionCreate"
import store from "../store"

class focusArea extends Component {
    render() {
        return (
            <div>
                <FocusAreaUi/>
            </div>
        )
    }
    componentDidMount(){
        this.props.getListFn();
        let data= this.props.state.list;
        console.log(data);
    }
}


let mapState=(state)=>{
    return{
        state
    }
}
let mapDispatch=(dispatch)=>{
    return {
        getListFn(){
            const action = getList();
            dispatch(action)
        }
    }
}

export default connect(mapState,mapDispatch)(focusArea);