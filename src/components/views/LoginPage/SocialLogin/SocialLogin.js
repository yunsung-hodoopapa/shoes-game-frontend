import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { KAKAO_AUTH_URL } from '../../../../constants/index';
import { socialLoginUser } from '../../../../actions/userAction';

import styled from 'styled-components';

const { Kakao } = window;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0px;
  border: none;
  border-radius: 9px;
  font-size: 14px;
  width: 150px;
  height: 30px;
  cursor: pointer;
  background-color: #fae001;
`;

function SocialLogin(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => ({
    user: state.user,
  }));

  const KakaoLoginClickHandler = (props) => {
    const scope = 'profile_nickname, profile_image, account_email';
    Kakao.Auth.login({
      scope,
      success: function (response) {
        Kakao.Auth.setAccessToken(response.access_token);

        const access_token = Kakao.Auth.getAccessToken();

        Kakao.API.request({
          url: '/v2/user/me',
          success: function ({ kakao_account }) {
            console.log(kakao_account);
            const { email, profile } = kakao_account;
            console.log(email);
            console.log(profile);

            const request = {
              id: email,
              nickname: profile.nickname,
              image: profile.profile_image_url,
              access_token: access_token,
            };
            dispatch(socialLoginUser(request))
              .then((res) => {
                // setCookie.cookie('x_auth', setCookie);
                if (res.payload.socialLoginSuccess) {
                  localStorage.setItem('userInfo', JSON.stringify(request));
                  history.push('/');
                }
              })
              .catch((err) => {
                console.log(err);
              });
          },
          //     .then((res) => {
          //       console.log(res.payload);
          //       if (res.payload) {
          //         props.history.push('/');
          //       } else {
          //         alert(res.payload.message);
          //       }
          //     })
          //   .catch((err) => {
          //     console.log(err);
          //   });
          // }
          //   axios({
          //     method: 'post',
          //     url: 'http://localhost:3002/auth/kakao',
          //     data: {
          //       'id': email,
          //       'nickname': profile.nickname,
          //       'image': profile.profile_image_url,
          //       'access_token': access_token,
          //     },
          //   })
          //   .then((res) => {
          //     console.log(res);
          //     console.log('complete');
          //   })
          //   .catch((error) => {
          //     console.error(error);
          //     alert('카카오 로그인 에러');
          //   });
          // },
          // fail: function (error) {
          //   console.log(error);
          // },
        });
      },
    });
  };

  return (
    <Container>
      <LoginBtn
        href={KAKAO_AUTH_URL}
        id="kakaoLogin"
        onClick={KakaoLoginClickHandler}
      >
        카카오 계정으로 로그인
      </LoginBtn>
    </Container>
  );
}

export default SocialLogin;
