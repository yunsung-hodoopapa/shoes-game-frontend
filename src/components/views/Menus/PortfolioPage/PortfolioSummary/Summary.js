import React from 'react';
import styled from 'styled-components';
import SummeryRatio from './SummeryRatio';
import ChartRatio from './ChartRatio';

const ContentsWrap = styled.div`
  display: flex;
  background-color: #e6ece9;
  width: 77vw;
  height: 50vh;
  padding: 1em 0.5em;
  margin-bottom: 2em;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    font-size: 0.5em;
    height: 50%;
    padding: 0.5rem 0.5rem;
  }
`;

const RatioWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 49vh;
  margin: 0.8em 0.8em;
  background-color: #ffffff;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 50rem;
    height: 100%;
    overflow-x: scroll;
  }
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
÷        <SummeryRatio
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
