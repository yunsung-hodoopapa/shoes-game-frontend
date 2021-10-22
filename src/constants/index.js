const CLIENT_ID = '4afea3c0a35ab1e701ff8dddfe94e41f';
const REDIRECT_URI = 'http://localhost:3000/oauth/kakao';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
export const KAKAO_LOGIN_API_URL = 'http://localhost:3002/auth/kakao';
