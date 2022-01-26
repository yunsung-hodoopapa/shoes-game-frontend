import React from 'react';
import styled from 'styled-components';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Section from './Section';
import Sidebar from './Sidebar/Sidebar';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  margin: 1rem 0;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: 80vh;
    align-items: stretch;
  }
`;

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`;

const Layout = ({ children }) => {
  return (
    <AppContainer>
      <Header />
      <Center>
        <Sidebar />
        <Section
          children={children}
        />
      </Center>
      <Footer />
    </AppContainer>
  );
}

export default Layout;