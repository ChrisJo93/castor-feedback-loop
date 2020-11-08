import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const commentReducer = (state = [], action) => {
  if (action.type === 'ADD_COMMENT') {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const feelsReducer = (state = [], action) => {
  if (action.type === 'ADD_FEELS') {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const supportReducer = (state = [], action) => {
  if (action.type === 'ADD_SUPPORT') {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const underReducer = (state = [], action) => {
  if (action.type === 'ADD_UNDER') {
    return [...state, action.payload];
  } else {
    return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feelsReducer,
    supportReducer,
    underReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
