import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';

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

const Main = (props) => {
  return (
    <ContentsWrap>
      <UserInfo />
      {/* <ShoesCloset /> */}
    </ContentsWrap>
  )
};

export default Main;
