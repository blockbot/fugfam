import App from "./App";
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import ThunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from "react-dom";
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(
  rootReducer, preloadedState,
  applyMiddleware(
    ThunkMiddleware,
    loggerMiddleware
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const app = document.getElementById( "app" );

ReactDOM.hydrate(
  <Provider store={store}>
    <App activeApp='${preloadedState.apps.activeApp}' />
  </Provider>
  ,
  app
);
