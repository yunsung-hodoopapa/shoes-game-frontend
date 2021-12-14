import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FollowingHeader from './FollowingHeader';
import FollowingTable from './FollowingTable';

const ContentsWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: grey;
  width: 1280px;
  height: 680px;
  left: 330px;
  top: 30px;
`;


const Following = (props) => {
  
  return (
    <>
      <ContentsWrap>
        <FollowingHeader />
        <div style={{height: '20px'}}></div>
        <FollowingTable>{props.child}</FollowingTable>
      </ContentsWrap>
    </>
  )
};

export default Following;
