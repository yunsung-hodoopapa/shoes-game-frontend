import { ADD_FOLLOW_ITEMS, ADD_ITEMS, ADD_FOllOW_ITEMS, REMOVE_ITEM } from '../actions/types';

// 초기상태 선언
const initialState = {
  items: [],
};

// 리듀서 선언
export const addItemsHandler = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case ADD_FOllOW_ITEMS:
      return {
        ...state,
        items: action.items,
      }
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action._id)
      }
    default:
      return state
  }
}
