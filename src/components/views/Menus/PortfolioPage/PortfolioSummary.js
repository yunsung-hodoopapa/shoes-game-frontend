import React from "react";
import styled from "styled-components";

const ContentsWrap = styled.div`
  display: flex;
  background-color: black;
  width: 1134px;
  height: 390px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const PortfolioRatio = styled.div`
  width: 680px;
  height: 350px;
  margin: 10px 15px 10px 15px;
  background-color: #FBEBEB;
`

const Summary = styled.div`
  width: 383px;
  height: 350px;
  background-color: blue;
`

const PortfolioSummary = () => {
  return (
    <ContentsWrap>
      <PortfolioRatio />
      <Summary />
    </ContentsWrap>
  )
};

export default PortfolioSummary