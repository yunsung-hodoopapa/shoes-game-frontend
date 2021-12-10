import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContentsWrap = styled.div`
  display: flex;
  // position: absolute;
  background-color: #2C0505;
  width: 1039px
  height: 190px;
  justify-content: center;
  align-items: center;
`;
const UserPicture = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  img {
    width: 150px;
    height: 150px;
  }
  object-fit: contain;
`;
const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 831px;
  height: 191px;
  color: white;
  button {
    width: 150px;
  }
  margin-left: 50px;
`;
const Nickname = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  strong {
    font-weight: 400;
    color: white;
  }
`;
const Email = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;
const EditButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
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
  position: absolute;
  top: 60px;
  right: 20px;
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
const UserInfo = ({ onClickHandler }) => {
  const users = JSON.parse(localStorage.getItem('userInfo'));
  console.log(users);

  return (
    <>
      {!!users && (
        <ContentsWrap>
          <UserPicture>
            {users.image ? <img src={users.image} alt="profile_image" /> : null}
          </UserPicture>
          <UserDetail>
            <Nickname>
              <strong> 유저네임: {users.name || users.nickname} </strong>
              <BtnWrap>
                {/* <isAuth?.nickname === userInfo.nickname ? (
              <EditButton onClick={goEdit}>프로필 편집</EditButton>
            ) : null} */}
              </BtnWrap>
            </Nickname>
            <Email>{users.email || users.id}</Email>
            <EditButton> 프로필 수정 </EditButton>
            {/* <LogoutButton onClick={onClickHandler}>로그아웃하기</LogoutButtn> */}
          </UserDetail>
        </ContentsWrap>
      )}
    </>
  );
};

export default UserInfo;
