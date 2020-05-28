import {createStore,combineReducers,applyMiddleware} from "redux"
import OneReducer from "./one/store"
import TwoReducer from "./two/store"
import createSaga from "redux-saga"
import sageReducer from "./sageReducer"

let mysaga = createSaga();

let bigStore = combineReducers({
    OneReducer,
    TwoReducer
})



export default createStore(bigStore,applyMiddleware(mysaga));

mysaga.run(sageReducer);




