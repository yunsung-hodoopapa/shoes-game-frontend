import React from 'react';
import styled from 'styled-components';
import PortfolioRatio from './PortfoilRatio';
import PortfolioSummary from '../ PortfolioSummary';

const ContentsWrap = styled.div`
  display: flex;
  background-color: black;
  width: 1134px;
  height: 390px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const RatioWrap = styled.div`
  width: 680px;
  height: 350px;
  margin: 10px 15px 10px 15px;
  background-color: #fbebeb;
`;

const PortfolioChart = () => {
  return (
    <ContentsWrap>
      <RatioWrap>
        <PortfolioRatio />
      </RatioWrap>
      <PortfolioSummary />
    </ContentsWrap>
  );
};

export default PortfolioChart;
