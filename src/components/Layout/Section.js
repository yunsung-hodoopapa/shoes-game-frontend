import React from 'react';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
  width: 80%;
  float: left;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    font-size: 0.5rem;
    margin: 0;
    height: 90%;
  }
`;

const Section = (props) => {
  return <ContentsWrap>{props.children}</ContentsWrap>;
};

export default Section;
