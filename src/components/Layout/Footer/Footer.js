import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  position: absolute;
  width: 100%;
  height: 7.5em;
  left: 0px;
  bottom: 0px;
  background-color: #004225;
  width: 100%;
  z-index: 0;
`;

const P = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-right: 1.5em;
  color: #fee6ca;
  font-weight: 700;
  font-size: 1em;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <P>presented by hodoocoding</P>
    </FooterWrap>
  );
};

export default Footer;
