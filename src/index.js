import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import promiseMiddlerware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
