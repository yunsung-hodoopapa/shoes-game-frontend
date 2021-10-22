import { REGISTER_USER, LOGIN_USER } from './types';
import { request } from '../utils/axios';

// const USER_URL = '/auth';

export function registerUser(dataToSubmit) {
  const data = request('post', '/auth/register', dataToSubmit);

  return {
    type: REGISTER_USER,
    payload: data,
  };
}

export function loginUser(dataToSubmit) {
  const data = request('post', '/auth/login', dataToSubmit);

  return {
    type: LOGIN_USER,
    payload: data,
  };
}
