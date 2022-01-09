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
  position: absolute;
  width: 100%;
  height: 46.5em;
  left: 0px;
  top: 142px;
  background-color: #fafdf3;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Center>
        <Sidebar />
        <Section
          children={children}
        />
      </Center>
      <Footer />
    </>
  );
}

export default Layout;
