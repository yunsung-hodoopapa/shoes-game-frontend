import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchTable from './PortfolioTable/SearchTable';
import Summary from './PortfolioSummary/Summary';
import { SERVER_URL } from '../../../../constants/index';
import axios from 'axios';

const ContentsWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #eaa8a8;
  width: 1280px;
  height: 680px;
  left: 320px;
  top: 30px;
`;

const Portfolio = (props) => {
  const [storedShoesInfo, setStoredShoesInfo] = useState([]);
  const [checkItems, setCheckItems] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/shoes/managed-shoesInfo`).then((res) => {
      setStoredShoesInfo(res.data);
    });
  }, []);

  const lengthOfData = storedShoesInfo.length;

  function getTotalAsset() {
    let result = 0;
    storedShoesInfo.forEach((shoesInfo) => {
      const benefit = Number(shoesInfo.resellPrice);
      result += benefit;
    });
    console.log(result);
    return result;
  }

  function getTotalShoePrice() {
    let result = 0;
    storedShoesInfo.forEach((shoesInfo) => {
      const shoePrice = Number(shoesInfo.shoePrice.substring(1));
      result += shoePrice;
    });
    return result;
  }

  return (
    <ContentsWrap>
      <Summary
        storedShoesInfo={storedShoesInfo}
        setStoredShoesInfo={setStoredShoesInfo}
        checkItems={checkItems}
        setCheckItems={setCheckItems}
        lengthOfData={lengthOfData}
        getTotalAsset={getTotalAsset}
        getTotalShoePrice={getTotalShoePrice}
      >
        {' '}
        {props.children}{' '}
      </Summary>
      <SearchTable
        storedShoesInfo={storedShoesInfo}
        setStoredShoesInfo={setStoredShoesInfo}
        checkItems={checkItems}
        setCheckItems={setCheckItems}
      >
        {' '}
        {props.children}{' '}
      </SearchTable>{' '}
    </ContentsWrap>
  );
};

export default Portfolio;
