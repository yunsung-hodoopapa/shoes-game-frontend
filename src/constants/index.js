const CLIENT_ID = '4afea3c0a35ab1e701ff8dddfe94e41f';
// const REDIRECT_URI = 'https://shoesgame.app/login';
const REDIRECT_URI = 'http://localhost:3000/login';
// export const SERVER_URL = 'https://shoesgame.click';
export const SERVER_URL = 'http://localhost:3002';
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_LOGIN_API_URL = `${SERVER_URL}/kakao`;
export const SELECTSIZE = [
  5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5,
];

export const colorContainer = [
  '#19553b',
  '#336851',
  '#4d7b66',
  '#668e7c',
  '#80a192',
  '#b1dd9e',
  '#315e26',
  '#7a9f79',
  '#acd1af',
];

export const shoeListLength = 20;

export const shoesObject = {
  shoesName: '',
  shoesSize: '',
  shoePrice: '',
  buyingDate: '',
  thumbnail: '',
  brand: '',
};
