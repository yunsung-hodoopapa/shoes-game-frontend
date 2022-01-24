import React from 'react';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  width: 75%;
  float: left;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    font-size: 0.5rem;
    margin: 0;
    height: 75%;
  }
`;

const Section = (props) => {
  return <ContentsWrap>{props.children}</ContentsWrap>;
};

export default Section;