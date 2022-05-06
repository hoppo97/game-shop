import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import thunk from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {rootReducer} from './redux/rootReducer';
import { Provider } from 'react-redux';

import './index.css';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
      <App />
    </Provider>
);


// "react-hooks/exhaustive-deps": ["off", {
//   "additionalHooks": "useDispatch|useOtherHookWhichWillDefinitelyNotChange"
// }],