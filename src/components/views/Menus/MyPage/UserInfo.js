import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, loadUserData } from '../../../../actions/userAction';
import styled from 'styled-components';
import { SERVER_URL } from '../../../../constants/index';
import { getCookie } from '../../../../utils/cookie';


const ContentsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  width: 100%;
  height: 20%;
  background-color: #e6ece9;
`;

const UserPicture = styled.div`
  width: 5rem;
  height: 5rem;
  background-position: 50% 50%;
  background-size: cover;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  object-fit: contain;
`;
const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15em;
  color: white;
  button {
    width: 10em;
  }
  margin-left: 3em;
  @media screen and (max-width: 500px) {
    padding: 0.5em;
  }
`;
const Nickname = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 400;
  strong {
    font-weight: 600;
    color: black;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;
const Email = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: black;
  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-right: 0.5rem;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  width: 50%;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Button = styled.button`
  width: 6em;
  height: 2.5em;
  background-color: #fff;
  padding: 0.1em 0.1em;
  margin-left: 1em;
  border: solid 1px #bababa;
  border-radius: 0.4em;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  &:hover {
    background-color: #efefef;
  }
  @media screen and (max-width: 500px) {
    width: 6em;
    height: 2.5em;
    font-size: 0.6rem;
    padding: 0.2rem 0.2rem;
    margin-bottom: 5px;
  }
`;

const BtnWrap = styled.div``;

const UserInfo = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => ({
    user: state.user.user,
  }));

  const userInfo = user.user;

  const logOutHandler = () => {
    const request = {
      user,
      _id: userInfo._id,
    };
    dispatch(logoutUser(request)).then((res) => {
      console.log(res);
      if (res.payload.user) {
        localStorage.removeItem('userInfo');
        console.log('success');
        history.push('/login');
      }
    });
  };

  const getUserInfoHandler = (user) => {
    dispatch(loadUserData(user));
  }

  const authCheckHandler = () => {
    const token = getCookie('x_auth');
    try {
      axios
        .get(`${SERVER_URL}/auth/managed/userInfo`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
        })
        .then((res) => {
          console.log('userData loading success');
          getUserInfoHandler(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    authCheckHandler();
  }, []);

  return (
    <>
      {!!userInfo && (
        <ContentsWrap>
          <UserPicture>
            {userInfo.image ? (
              <img src={userInfo.image} alt="profile_image" />
            ) : null}
          </UserPicture>
          <UserDetail>
            <Nickname>
              <strong> {userInfo.name || userInfo.nickname}</strong>
              <BtnWrap>
                {/* <isAuth?.nickname === userInfo.nickname ? (
              <EditButton onClick={goEdit}>프로필 편집</EditButton>
            ) : null} */}
              </BtnWrap>
            </Nickname>
            <Email>{userInfo.email || userInfo.id}</Email>
          </UserDetail>
          <ButtonWrap>
            <Button> 프로필 수정 </Button>
            <Button onClick={logOutHandler}>로그아웃</Button>
          </ButtonWrap>
        </ContentsWrap>
      )}
    </>
  );
};

export default UserInfo;
