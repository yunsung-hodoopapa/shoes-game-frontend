import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { KAKAO_LOGIN_API_URL } from '../../constants/index';

const { Kakao } = window;

function SocialLogin( { }) {
  // const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const history = useHistory();

  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        console.log(authObj);
        fetch(`${KAKAO_LOGIN_API_URL}`, {
          method: 'POST',
          body: JSON.stringify({
            access_token: authObj.access_token,
            // id: authObj.kakao_account.profile,
            // email: authObj.kakao_account.email,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem('kakao_token', res.access_token);
            if (res.access_token) {
              alert('Shoes game에 오신걸 환영합니다.');
              history.pushState('/login');
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  const kakaoLogoutClickHandler = () => {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        // 로그아웃하고
        url: '/vi/user/unlink',
        success: function (authObj) {
          console.log('authObj');
        },
        fail: function (error) {
          console.log(error);
        },
      });
      // // 토큰 삭제
      Kakao.Auth.setAccessToken(undefined);
      // // 유저 정보도 삭제
      // const userInfoElem = document.querySelector('#userInfo')
      // if (userInfoElem) userInfoElem.value = ''
    }
  };
  return (
    <div className="kakao-login-button">
      <button
        href="http://localhost:3002/auth/kakao"
        id="kakaoLogin"
        onClick={kakaoLoginClickHandler}
      >
        <img src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png"></img>
      </button>
      <button id="kakaoLogout" onClick={kakaoLogoutClickHandler}>
        카카오 로그아웃
      </button>{' '}
      {/* <input id='userInfo' value=''></input> */}
    </div>
  );
}

export default SocialLogin;
