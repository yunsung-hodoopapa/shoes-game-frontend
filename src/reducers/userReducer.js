import { REGISTER_USER, LOGIN_USER, KAKAO_LOGIN_USER } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, success: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case KAKAO_LOGIN_USER:
      return { ...state, socialLoginSuccess: action.payload };
    default:
      return state;
  }
}
