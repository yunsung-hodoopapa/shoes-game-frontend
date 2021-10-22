import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  KAKAO_LOGIN_API_URL,
  KAKAO_AUTH_URL,
} from '../../../../constants/index';
import styled from 'styled-components';

const { Kakao } = window;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SocialLogin() {
  let history = useHistory();

  const kakaoLoginClickHandler = () => {
    const scope = 'profile_nickname, account_email';
    Kakao.Auth.login({
      scope,
      success: function (response) {
        Kakao.Auth.setAccessToken(response.access_token);
        history.push('/');

        const access_token = Kakao.Auth.getAccessToken();
        // console.log(ACCESS_TOKEN);

        Kakao.API.request({
          url: '/v2/user/me',
          success: function ({ kakao_account }) {
            console.log(kakao_account);
            const { email, profile } = kakao_account;
            console.log(email);
            console.log(profile);

            axios({
              method: 'post',
              url: 'http://localhost:3002/auth/kakao',
              data: {
                id: email,
                nickname: profile.nickname,
                access_token: access_token
              },
            })
            .then((res) => {
              console.log(res);
              console.log('complete');
            })
            .then((res) => {
              // let access_token = res.body.access_token;
              // console.log(access_token);
              // let refresh_token = res.headers['refresh-token'];
              // console.log(refresh_token);
              // localStorage.setItem('access_token', access_token);
              // localStorage.setItme('refrech_toekn', refresh_token);
              history.push('/');
            })
            .catch((error) => {
              console.error(error);
              alert('카카오 로그인 에러');
            });
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  // const kakaoLoginClickHandler = () => {
  //   Kakao.Auth.login({
  //     success: function (authObj) {
  //       console.log(authObj);
  //       fetch(`${KAKAO_LOGIN_API_URL}`, {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           access_token: authObj.access_token,
  //           // id: authObj.kakao_account.profile,
  //           // email: authObj.kakao_account.email,
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((res) => {
  //           localStorage.setItem('kakao_token', res.access_token);
  //           if (res.access_token) {
  //             alert('Shoes game에 오신걸 환영합니다.');
  //             history.pushState('/login');
  //           }
  //         });
  //     },
  //     fail: function (err) {
  //       alert(JSON.stringify(err));
  //     },
  //   });

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
    <Container>
      <button
        href={KAKAO_AUTH_URL}
        id="kakaoLogin"
        onClick={kakaoLoginClickHandler}
      >
        카카오 로그인
        {/* <img src="https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png"></img> */}
      </button>
      {/* <button id="kakaoLogout" onClick={kakaoLogoutClickHandler}>
        카카오 로그아웃
      </button>{' '} */}
      {/* <input id='userInfo' value=''></input> */}
    </Container>
  );
}

export default SocialLogin;
