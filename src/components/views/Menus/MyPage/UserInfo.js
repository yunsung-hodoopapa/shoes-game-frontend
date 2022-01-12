import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../../actions/userAction';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  display: flex;
  background-color: #e6ece9;
  width: 90.125em;
  height: 43.25em;
  justify-content: center;
  align-items: center;
`;

const UserPicture = styled.div`
  width: 10em;
  height: 10em;
  background-position: 50% 50%;
  background-size: cover;
  img {
    width: 10em;
    height: 10em;
    border-radius: 50%;
  }
  object-fit: contain;
`;
const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 51.9em;
  height: 11.8em;
  color: white;
  button {
    width: 10em;
  }
  margin-left: 3em;
`;
const Nickname = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  strong {
    font-weight: 600;
    color: black;
  }
`;
const Email = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
`;

const ButtonWrap = styled.div``;

const EditButton = styled.button`
  background-color=#fff;
  padding: 6px 6px;
  margin-left: 20px;
  border: solid 1px #bababa;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px
  &:hover {
    background-color: #efefef;
  }
`;
const LogoutButtn = styled.button`
  background-color: #fff;
  padding: 6px 6px;
  margin-left: 20px;
  border: solid 1px #bababa;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px
  &:hover {
    background-color: #efefef;
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
            <EditButton> 프로필 수정 </EditButton>
            <LogoutButtn onClick={logOutHandler}>로그아웃하기</LogoutButtn>
          </ButtonWrap>
        </ContentsWrap>
      )}
    </>
  );
};

export default UserInfo;
