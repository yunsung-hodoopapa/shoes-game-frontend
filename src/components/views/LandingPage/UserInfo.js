import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

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
  background-color: tomato;
  color: white;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  img {
    width: 150px;
    height: 150px;
  }
`;
const UserDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 831px;
  height: 191px;
  color: white;
  button {
    width: 150px;
  }
  margin-left: 50px;
`;
const Nickname = styled.span `
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 25px;
  strong {
    font-weight: 400;
    color: #2e2e2e;
  }
`;
const Email = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #2c2c2c;
`;
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
const BtnWrap = styled.div``;

const UserInfo = ({ goEdit, userInfo }) => {
  return (
    <ContentsWrap>
      <UserPicture>
        <div>
          {/* <img src={userInfo.profileImg} alt='profile_image'/> */}
        </div>
      </UserPicture>
      <UserDetail>
        <Nickname>
          {/* <strong>{userInfo.nickname}</strong> */}
          <BtnWrap>
            {/* <isAuth?.nickname === userInfo.nickname ? (
              <EditButton onClick={goEdit}>프로필 편집</EditButton>
            ) : null} */}
          </BtnWrap>
        </Nickname>
        {/* <Email>userInfo.email</Email> */}
        <EditButton> 프로필 수정 </EditButton>
      </UserDetail>
    </ContentsWrap>
  )
};

export default UserInfo;
