import {CHANGE_INPUTVALUE, GET_LIST,GET_MY_LIST} from "./actionTypes"
import store from "./index"
import axios from "axios"

// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象时，必须在对象外面加一个大括号
export const changeInputAction = (value) =>({type:CHANGE_INPUTVALUE,value});

export const getListAction = (data) =>({
    type:GET_LIST,
    data
})

export const getList=()=>{
    return ()=>{
        axios.get("/getList").then(res=>{
            const data = res.data
            const action = getListAction(data)
            store.dispatch(action)
        })
    }
}
export const getMyListAction =()=>({
    type:GET_MY_LIST,
})