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
  width: 800px;
  height: 350px;
  margin: 10px 15px 10px 15px;
  background-color: #fbebeb;
`;

const Summary = ({ lengthOfData, storedShoesInfo, setStoredShoesInfo,  getTotalAsset, getTotalShoePrice }) => {

  return (
    <ContentsWrap>
      <RatioWrap>
        <SummeryRatio
          storedShoesInfo={storedShoesInfo}
          getTotalAsset={getTotalAsset}
          getTotalShoePrice={getTotalShoePrice}
        />
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
