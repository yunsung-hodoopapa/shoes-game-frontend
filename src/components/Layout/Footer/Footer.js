import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  width: 100%;
  height: 9rem;
  min-width: 1024px;
  padding: 1em;
  background-color: #004225;
  @media screen and (max-width: 500px) {
    min-width : 320px;
    display: flex;
    font-size: 0.5em;
    align-items: center;
    justify-content: flex-end;
    height: 4rem;
    padding: 1em;
  }
`;

const P = styled.p`
  display: flex;
  justify-content: flex-end;
  margin-right: 1.5em;
  color: #fee6ca;
  font-weight: 700;
  font-size: 1em;
  @media screen and (max-width: 500px) {
    display: flex;
    font-size: 0.5em;
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <P>presented by hodoocoding</P>
    </FooterWrap>
  );
};

export default Footer;
