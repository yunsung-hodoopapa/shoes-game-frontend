import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { logoutUser } from '../../../../actions/userAction';
import UserInfo from './UserInfo';
import Cookies from 'js-cookie';
import { request } from '../../../../utils/axios';

const ContentsWrap = styled.div`
  position: absolute;
  background-color: white;
  width: 1134px;
  height: 709px;
  left: 330px;
  top: 26px;
  justify-content: center;
  align-items: center;
`;

const LandingPage = (props) => {

  // const dispatch = useDispatch();
  const history = useHistory();

  // const user = useSelector((state) => state.user);

  const onClickHandler = () => {
    window.Cookies.set('x_auth')
    // dispatch(logoutUser())
    //   .then((res) => {
    //     console.log(res);
    //     if (res.payload.success) {
    //       props.history.push('/login');
    //       localStorage.removeItem('userInfo');
    //     } else {
    //       alert('로그아웃에 실패했습니다');
    //     }
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <ContentsWrap>
      <UserInfo
        onClickHandler={onClickHandler}
      />
      {/* <ShoesCloset /> */}
    </ContentsWrap>
  )
};

export default LandingPage;
