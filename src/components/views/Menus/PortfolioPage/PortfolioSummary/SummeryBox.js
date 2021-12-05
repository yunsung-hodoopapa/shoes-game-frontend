import React, { useState, useEffect} from "react";
import styled from "styled-components";

const SummaryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 334px;
  height: 350px;
  background-color: blue;
`
const SectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 150px;
  margin: 5px 5px;
  background-color: tomato;
`

function SummeryBox ({ lengthOfData, getTotalAsset, getTotalShoePrice }) {
  const AssetBox = (props) => {
    return (
      <>
        <SectionBox>
          총 리셀 가격 : {props.totalAsset}
        </SectionBox>
      </>
    );
  }

  const PriceBox = (props) => {
    return (
      <>
        <SectionBox>
          총 구매가격 : {props.totalShoePrice}
        </SectionBox>
      </>
    );
  }

  const BenefitBox = (props) => {
    return (
      <>
        <SectionBox>
          이익 : {Number(props.totalAsset) - Number(props.totalShoePrice)}
        </SectionBox>
      </>
    )
  }
  
  return (
    <SummaryWrap>
      <AssetBox
        totalAsset={getTotalAsset()}
      />
      <SectionBox> 항목 수 : {lengthOfData} </SectionBox>
      <PriceBox
        totalShoePrice={getTotalShoePrice()}
      /> 
      <BenefitBox
        totalAsset={getTotalAsset()}
        totalShoePrice={getTotalShoePrice()}
      />
    </SummaryWrap>
  );
}

export default SummeryBox