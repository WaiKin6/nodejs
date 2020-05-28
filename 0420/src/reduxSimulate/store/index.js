import {createStore,combineReducers} from "redux"
import OneReducer from "./one/store"
import TwoReducer from "./two/store"



let bigStore = combineReducers({
    OneReducer,
    TwoReducer
})


export default createStore(bigStore);




