import { ADD_ITEMS } from '../actions/types';

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
    default:
      return state
  }
}
