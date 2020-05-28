import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Test from './reduxSimulate/index';
// import store from "./store/index"
// import { Provider } from "react-redux"


// import Provider from "./components/provider"
// import store from "./data"
import {Provider} from "react-redux"
import store from "./reduxSimulate/store"


ReactDOM.render(
 <Provider store={store}>
     <Test />
     </Provider>,
document.getElementById('root'));
