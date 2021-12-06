import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.div`
  display: flex;
  width: 1280px;
  height: 100px;
  border: 1px solid tomato;
  align-items: center;
  justify-content: space-between;
`;

const FollowingHeader = () => {
  return (
    <HeaderWrap>
      <h2> 팔로잉 </h2>
      <button />
    </HeaderWrap>
  )
};

export default FollowingHeader;
