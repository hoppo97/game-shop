import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import thunk from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import {rootReducer} from './redux/rootReducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import './index.css';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store} >
      <App />
    </Provider>
);
