import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { handleModalReducer } from './modalReducer';
import { shoesInfoHandler } from './shoesInfoReducer';

const rootReducer = combineReducers({
  user: userReducer,
  modal: handleModalReducer,
  shoesInfo: shoesInfoHandler,
});

export default rootReducer;