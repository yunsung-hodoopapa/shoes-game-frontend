import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';

const initialState = {
  isModalShown: false,
};

export function handleModalReducer (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalShown: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalShown: false,
      };
    default:
      return state;
  }
};
