import React from "react";
import styled from "styled-components";

const SummaryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  height: 350px;
  background-color: blue;
`
const SectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 165px;
  margin: 5px 5px;
  background-color: tomato;
`


const PortfolioSummary = () => {
  return (
    <SummaryWrap>
      <SectionBox> 항목 </SectionBox>
      <SectionBox> 시장가치 </SectionBox>
      <SectionBox> 이익 손실 </SectionBox>
      <SectionBox> 평균가 </SectionBox>
    </SummaryWrap>
  );
}

export default PortfolioSummary