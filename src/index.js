import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feelsReducer = (state = [], action) => {
  if (action.type === 'ADD_FEELS') {
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
    underReducer,
  })
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
