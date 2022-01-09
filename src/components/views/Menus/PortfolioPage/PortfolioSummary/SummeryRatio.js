import React from 'react';
import styled from 'styled-components';
import ItemRatio from './ItemRatio';
import ProfitRatio from './ProfitRatio';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend, Title);

const ChatWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SummeryRatio = ({
  storedShoesInfo,
  getPricefromData,
  getResellPricefromData,
  getLabelfromData,
}) => {
  function getRandomRgba() {
    const rgbaContainer = [];
    const o = Math.round;
    const r = Math.random;
    const s = 180;
    for (let i = 0; i < storedShoesInfo.length; i++) {
      const rgba =
        'rgba(' +
        o(r() * s) +
        ',' +
        o(r() * s) +
        ',' +
        o(r() * s) +
        ',' +
        r().toFixed(1) +
        ')';
      rgbaContainer.push(rgba);
    }
    return rgbaContainer;
  }

  return (
    <>
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
