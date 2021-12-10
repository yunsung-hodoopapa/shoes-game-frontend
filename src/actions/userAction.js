
import { REGISTER_USER, LOGIN_USER, KAKAO_LOGIN_USER, LOGOUT_USER } from './types';
import { request } from '../utils/axios';

export async function registerUser(dataToSubmit) {
  const data = await request('post', '/auth/register', dataToSubmit);

  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export async function loginUser(dataToSubmit) {
  const data = await request('post', '/auth/login', dataToSubmit);
  return {
    type: LOGIN_USER,
    payload: data,
  };
}

export async function socialLoginUser(dataToSubmit) {
  const data = await request('post', '/auth/kakao', dataToSubmit);
  return {
    type: KAKAO_LOGIN_USER,
    payload: data,
  };
}

export function logoutUser() {
  const data = request('post', '/auth/logout');
  return {
    type: LOGOUT_USER,
    payload: data,
  };
}
