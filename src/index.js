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
    return [action.payload]; //not spreading previous state means submitting values during review
    //will reset each time a user goes through feedback
  } else {
    return state;
  }
};

const feelsReducer = (state = [], action) => {
  if (action.type === 'ADD_FEELS') {
    return [action.payload];
  } else {
    return state;
  }
};

const supportReducer = (state = [], action) => {
  if (action.type === 'ADD_SUPPORT') {
    return [action.payload];
  } else {
    return state;
  }
};

const underReducer = (state = [], action) => {
  if (action.type === 'ADD_UNDER') {
    return [action.payload];
  } else {
    return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    commentReducer,
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
