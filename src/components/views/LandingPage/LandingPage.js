import React, { useState } from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import ShoesCloset from './ShoesCloset';

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  width: 1134px;
  height: 709px;
  left: 330px;
  top: 26px;
  // justify-content: center;
  // align-items: center;
`;


const LandingPage = (props) =>{
  return (
    <ContentsWrap>
      <UserInfo />
      <ShoesCloset>
        {props.children}
      </ShoesCloset>
    </ContentsWrap>
  )
};

export default LandingPage;
