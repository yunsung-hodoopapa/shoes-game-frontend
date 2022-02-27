// import Cookies from 'js-cookie';
import { getCookie } from "./cookie";

const token = getCookie('x_auth');

export const isLogin = () => {
  console.log(token);
  return {
    token: token,
  };
};
