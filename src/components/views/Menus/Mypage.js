import React from 'react';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  position: absolute;
  background-color: #C4C4C4;
  width: 1134px
  height: 709px;
  left: 302px;
  top: 142px;
  justify-content: center;
  align-items: center;
`;

const MyPage = () => {
  return (
    <ContentsWrap>My Page!</ContentsWrap>
  )
};

export default MyPage;
