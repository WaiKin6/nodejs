import {createStore, applyMiddleware,compose} from "redux";
import reducer from "./reducer"
import thunk from "redux-thunk"
// import createSagaMiddleware from "redux-saga"
// import mySagas from "./sagas"

// let SagaMiddleware = createSagaMiddleware();

//弄个增强函数的意义是把redux devlop插件和thunk一块使用
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer,enhancer)

// SagaMiddleware.run(mySagas)
export default store;