import React from 'react';
import styled from 'styled-components';
import SummeryRatio from './SummeryRatio';
import SummeryBox from './SummeryBox';

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

const Summary = ({ lengthOfData, storedShoesInfo, setStoredShoesInfo }) => {

  function getTotalAsset() {
    let result = 0;
    storedShoesInfo.forEach((shoesInfo) => {
      const benefit = Number(shoesInfo.resellPrice);
      result += benefit
    });
    console.log(result);
    return result;
  };

  function getTotalShoePrice() {
    let result = 0;
    storedShoesInfo.forEach((shoesInfo) => {
      const shoePrice = Number(shoesInfo.shoePrice.substring(1));
      result += shoePrice
    });
    return result;
  }

  return (
    <ContentsWrap>
      <RatioWrap>
        <SummeryRatio />
      </RatioWrap>
      <SummeryBox
        lengthOfData={lengthOfData} 
        getTotalAsset={getTotalAsset}
        getTotalShoePrice={getTotalShoePrice}
      />
    </ContentsWrap>
  );
};

export default Summary;
