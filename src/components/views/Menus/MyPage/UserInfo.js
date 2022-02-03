import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../../../actions/userAction';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  display: flex;
  width: 100%;
  height: 15%;
  background-color: #e6ece9;
`;

const UserPicture = styled.div`
  width: 9em;
  height: 9em;
  margin-left: 1rem;
  background-position: 50% 50%;
  background-size: cover;
  img {
    width: 9em;
    height: 9em;
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
  font-size: 1.5rem;
  font-weight: 400;
  strong {
    font-weight: 600;
    color: black;
  }
`;
const Email = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-right: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 50%;
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
            <Button> 프로필 수정 </Button>
            <Button onClick={logOutHandler}>로그아웃</Button>
          </ButtonWrap>
        </ContentsWrap>
      )}
    </>
  );
};

export default UserInfo;
