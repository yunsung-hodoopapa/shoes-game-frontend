import {
  REGISTER_USER,
  LOGIN_USER,
  KAKAO_LOGIN_USER,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_ITEMS,
  LOGOUT_USER,
  ADD_FOllOW_ITEMS,
  REMOVE_ITEM,
  LOADED,
} from './types';
import { request } from '../utils/axios';

export async function registerUser(dataToSubmit) {
  console.log('redux in!');
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

export const logoutUser = (dataToSubmit) => {
  const data = request('post', '/auth/logout', dataToSubmit);
  return {
    type: LOGOUT_USER,
    payload: data,
  };
};

export const openModal = () => {
  return {
    type: OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
}

export const addItems = (data) => {
  return {
    type: ADD_ITEMS,
    items: data,
  };
};

export const addFollowItems = (data) => {
  return {
    type: ADD_FOllOW_ITEMS,
    items: data,
  };
};

export const removeItem = (data) => {
  return {
    type: REMOVE_ITEM,
    items: data,
  };
};

export const isLoaded = (loaded) => {
  return {
    type: LOADED,
    loaded,
  };
};
