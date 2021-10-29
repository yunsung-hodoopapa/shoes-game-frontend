import { ADD_SHOES } from '../actions/types';

const initialState = {
  shoesName: '',
  shoesSize: '',
};

export const shoesInfoHandler = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SHOES:
      return {
        ...state,
        shoesName: action.value,
        shoesSize: action.value,
      };
    default:
      return state
  }
}
