import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { handleModalReducer } from './modalReducer';
import { addItemsHandler } from './itemsInfoReducer';

const rootReducer = combineReducers({
  user: userReducer,
  modal: handleModalReducer,
  items: addItemsHandler,
});

export default rootReducer;