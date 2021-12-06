import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FollowingHeader from './FollowingHeader';
import FollowingTable from './FollowingTable';

const ContentsWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #eaa8a8;
  width: 1280px;
  height: 680px;
  top: 30px;
  // justify-content: center;
  // align-items: center;
`;


const Following = (props) => {
  const [storedShoeInfo, setStoredShoeInfo] = useState([]);

  return (
    <>
      <ContentsWrap>
        <FollowingHeader>{props.child}</FollowingHeader>
        <div style={{height: '10px'}}></div>
        <FollowingTable>{props.child}</FollowingTable>
      </ContentsWrap>
    </>
  )
};

export default Following;
