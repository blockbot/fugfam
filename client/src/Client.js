import App from "./App";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from "react-dom";
import rootReducer from './reducers'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(rootReducer, preloadedState);
const app = document.getElementById( "app" );

ReactDOM.hydrate( 
  <Provider store={store}>
    <App activeApp='${preloadedState.activeApp}' />
  </Provider>
  , 
  app 
);