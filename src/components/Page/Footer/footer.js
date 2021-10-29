import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  position: absolute;
  width: 100%;
  height: 173px;
  left: 0px;
  top: 851px;
  background-color: #E95959;
  width: 100%;
  z-index: 0;
`;

const Footer = () => {
  return <FooterWrap>designed by hodoocoindg</FooterWrap>;
};

export default Footer;