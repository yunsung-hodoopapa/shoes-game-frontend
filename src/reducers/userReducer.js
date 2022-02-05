import { FaAcquisitionsIncorporated } from 'react-icons/fa';
import {
  REGISTER_USER,
  LOGIN_USER,
  KAKAO_LOGIN_USER,
  LOGOUT_USER,
  LOAD_USER,
} from '../actions/types';

const initialState = {
  user: {},
  success: false,
  loginSuccess: false,
  socialLoginSuccess: false,
  isAuth: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, success: action.payload };
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        loginSuccess: action.payload.loginSuccess,
      };
    case KAKAO_LOGIN_USER:
      return {
        ...state,
        user: action.payload.user,
        socialLoginSuccess: action.payload.socialLoginSuccess,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: action.payload.user,
        success: action.payload.success,
      };
    case LOAD_USER:
      return {
        ...state,
        user: action.payload.user,
        isAuth: action.payload.isAuth,
      };
    default:
      return state;
  }
};
