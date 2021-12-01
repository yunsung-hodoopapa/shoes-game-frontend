import React from 'react';
import styled from 'styled-components';
import PortfolioSummary from './PortfolioSummary';
import PortfolioBoard from './PortfolioBoard';
import SearchTable from './SearchTable';

const ContentsWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #eaa8a8;
  width: 1134px;
  height: 680px;
  left: 320px;
  top: 30px;
`;

const Portfolio = (props) => {
  return (
    <ContentsWrap>
      <PortfolioSummary />
      <SearchTable> {props.children} </SearchTable>
      {/* <PortfolioBoard> {props.children} </PortfolioBoard> */}
    </ContentsWrap>
  )
};

export default Portfolio;
