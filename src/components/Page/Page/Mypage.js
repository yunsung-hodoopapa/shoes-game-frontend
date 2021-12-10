import React from 'react';
import styled from 'styled-components';

const Mypage = styled.div`
  display: flex;
  background-color: pink;
  width: 100%
  justify-content: center;
  align-items: center;
`;

const AppMypage = () => {
  return (
    <Mypage>My Page!</Mypage>
  )
};

export default AppMypage;
