import { REGISTER_USER, LOGIN_USER, KAKAO_LOGIN_USER, LOGOUT_USER } from '../actions/types';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, success: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case KAKAO_LOGIN_USER:
      return { ...state, socialLoginSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state, success: action.payload };
    default:
      return state;
  }
}
