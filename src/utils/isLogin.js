// import Cookies from 'js-cookie';

export const isLogin = () => (
  !!localStorage.getItem('userInfo') ? true : false
);
