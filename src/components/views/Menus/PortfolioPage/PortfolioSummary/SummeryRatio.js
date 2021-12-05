import React, { useEffect } from 'react';
import styled from 'styled-components';
import ItemRatio from './ItemRatio';
import ProfitRatio from './ProfitRatio';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend, Title );

const ChatWrap = styled.div`
  display: flex;
`
const SummeryRatio = ({
  storedShoesInfo,
  getTotalAsset,
  getTotalShoePrice,
}) => {

  function getLabelfromData() {
    const shoeNamelabels = [];
    storedShoesInfo.forEach((shoesInfo) => {
      const shoeName = shoesInfo.shoeName;
      shoeNamelabels.push(shoeName);
    })
    console.log(shoeNamelabels);
    return shoeNamelabels;
  }

  function getPricefromData() {
    const priceData = [];
    storedShoesInfo.forEach((shoesInfo) => {
      const shoePrice = Number(shoesInfo.shoePrice.substring(1));
      priceData.push(shoePrice);
    })
    return priceData;
  }

  function getResellPricefromData() {
    const resellPriceData = [];
    storedShoesInfo.forEach((shoesInfo) => {
      const resellPrice = shoesInfo.resellPrice;
      resellPriceData.push(resellPrice);
    })
    return resellPriceData;
  }

  function getRandomRgba() {
    const rgbaContainer = [];
    const o = Math.round
    const r = Math.random
    const s = 255;
    for(let i = 0; i < storedShoesInfo.length; i++) {
      const rgba = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
      rgbaContainer.push(rgba);
    }
  return rgbaContainer;
  }

  return (
    <>
      <h2> 내 포트폴리오 </h2>
      <ChatWrap>
        <ItemRatio
          getPricefromData={getPricefromData}
          getRandomRgba={getRandomRgba}
          getLabelfromData={getLabelfromData}
        />
        <ProfitRatio
          getResellPricefromData={getResellPricefromData}
          getRandomRgba={getRandomRgba}
          getLabelfromData={getLabelfromData} 
        />
      </ChatWrap>
    </>
  );
};

export default SummeryRatio;
