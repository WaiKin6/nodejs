import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes"
import axios from "axios"
import "../mock"
import { getMyListAction } from "./actionCreate"

//generator函数 用来处理异步方法的
function* mySaga() {
    //等待监听
    yield takeEvery(GET_MY_LIST, getList)
}

function* getList() {
    // axios.get("/getList").then(res=>{
    //     const data = res.data
    //     const action = getListAction(data)
    //     //注意这里使用的是put 不是store.dispatch
    //     put(action)
    // })
    const res = yield axios.get("/getList")
    const action = getMyListAction(res.data[0])
    yield put(action)
}
export default mySaga