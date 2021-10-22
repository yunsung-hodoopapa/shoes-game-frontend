import React from 'react';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  position: absolute;
  background-color: white;
  width: 1134px
  hight: 709px;
  left: 302px;
  top: 142px;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <ContentsWrap>Home!</ContentsWrap>
  )
};

export default Main;
