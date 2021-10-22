import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import promiseMiddlerware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';
import { applyMiddleware, createStore } from 'redux';

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddlerware,
  reduxThunk
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
