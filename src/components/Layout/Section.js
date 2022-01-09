import React from 'react';
import styled from 'styled-components';

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 98.125em;
  height: 41.25em;
  top: 1.625em;
  justify-content: center;
  align-items: center;
`;

const Section = (props) => {
  return <ContentsWrap>{props.children}</ContentsWrap>;
};

export default Section;
