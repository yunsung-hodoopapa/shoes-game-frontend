import React from 'react';
import styled from 'styled-components';

const Home = styled.div`
  display: flex;
  background-color: pink;
  width: 100%
  justify-content: center;
  align-items: center;
`;

const AppHome = () => {
  return (
    <Home>Home!</Home>
  )
};

export default AppHome;
