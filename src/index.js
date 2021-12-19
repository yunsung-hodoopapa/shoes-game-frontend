import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import promiseMiddlerware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
