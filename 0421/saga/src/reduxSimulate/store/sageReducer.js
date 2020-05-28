import {takeEvery,take,put,select} from "redux-saga/effects"



function * sagaReducer(){
    while(true){
        let res = yield take("CHANGE_AGE");
        console.log("res",res);
        yield select((state)=>{
            console.log("state",state);     
        })
        yield put({
            type:"ADD_COUNT",
            data:321
        })
    }
}

export default sagaReducer;