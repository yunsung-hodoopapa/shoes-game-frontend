import React from 'react';
import styled from 'styled-components';
import SummeryRatio from './SummeryRatio';
import ChartRatio from './ChartRatio';

const ContentsWrap = styled.div`
  display: flex;
  background-color: black;
  width: 1280px;
  height: 390px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const RatioWrap = styled.div`
  width: 900px;
  height: 350px;
  margin: 10px 15px 10px 15px;
  background-color: #fbebeb;
  align-items: center;
`;

const Summary = ({
  lengthOfData,
  storedShoesInfo,
  setStoredShoesInfo,
  checkItems,
  setCheckItems,
  getTotalAsset,
  getTotalShoePrice,
}) => {
  function getLabelfromData() {
    const shoeNamelabels = [];
    storedShoesInfo.forEach((shoesInfo) => {
      const shoeName = shoesInfo.shoeName;
      shoeNamelabels.push(shoeName);
    });
    return shoeNamelabels;
  }

  function getPricefromData() {
    const priceData = [];
    storedShoesInfo.forEach((shoesInfo) => {
      const shoePrice = Number(shoesInfo.shoePrice.substring(1));
      priceData.push(shoePrice);
    });
    return priceData;
  }

  function getResellPricefromData() {
    const resellPriceData = [];
    storedShoesInfo.forEach((shoesInfo) => {
      const resellPrice = Number(shoesInfo.resellPrice);
      resellPriceData.push(resellPrice);
    });
    return resellPriceData;
  }
  return (
    <ContentsWrap>
      <RatioWrap>
        <h2>내 포트폴리오</h2>
        <SummeryRatio
          storedShoesInfo={storedShoesInfo}
          getTotalAsset={getTotalAsset}
          getTotalShoePrice={getTotalShoePrice}
          getPricefromData={getPricefromData}
          getResellPricefromData={getResellPricefromData}
          getLabelfromData={getLabelfromData}
        />
      </RatioWrap>
      <ChartRatio
        storedShoesInfo={lengthOfData}
        getTotalAsset={getTotalAsset}
        getTotalShoePrice={getTotalShoePrice}
        getPricefromData={getPricefromData}
        getResellPricefromData={getResellPricefromData}
        getLabelfromData={getLabelfromData}
      />
    </ContentsWrap>
  );
};

export default Summary;
