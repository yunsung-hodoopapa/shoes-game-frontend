import { createGlobalStyle } from 'styled-components';
// import GothicA1 from './GothicA1.woff';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
    // @font-face {
    //     font-family: "GothicA1";
    //     src: local("GothicA1"),
    //     url(${GothicA1}) format('woff');
    //     font-weight: 300;
    //     font-style: normal;
    // }
