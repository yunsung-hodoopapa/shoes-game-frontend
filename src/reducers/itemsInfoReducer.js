import {
  ADD_ITEMS,
  ADD_FOllOW_ITEMS,
  REMOVE_ITEM,
  LOADED,
} from '../actions/types';

const initialState = {
  items: [],
  isDataLoaded: false,
};

export const addItemsHandler = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: action.items,
        isDataLoaded: true,
      };
    case ADD_FOllOW_ITEMS:
      return {
        ...state,
        items: action.items,
        isDataLoaded: true,
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action._id),
      };
    case LOADED:
      return {
        ...state,
        isDataLoaded: action.loaded,
      };
    default:
      return state;
  }
};
