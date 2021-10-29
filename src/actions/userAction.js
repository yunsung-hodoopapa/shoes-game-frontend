import { REGISTER_USER, LOGIN_USER, KAKAO_LOGIN_USER, OPEN_MODAL, CLOSE_MODAL, ADD_SHOES } from './types';
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

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

let nextShoesId = 0;
export const addShoes = (content) => {
  return {
    type: ADD_SHOES,
    payload: {
      id: ++nextShoesId,
      content,
    }
  };
};