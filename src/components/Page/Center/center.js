import React from 'react';
import styled from 'styled-components';

const CenterWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 709px;
  left: 0px;
  top: 142px;
  background-color: #c4c4c4;
  display: flex;
`;
const Center = ({ children }) => {
  return <CenterWrap>{children}</CenterWrap>;
};

export default Center;
