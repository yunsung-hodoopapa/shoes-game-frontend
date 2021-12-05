import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import SearchTable from './PortfolioTable/SearchTable';
import Summary from './PortfolioSummary/Summary';
import axios from 'axios';


const ContentsWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #eaa8a8;
  width: 1134px;
  height: 680px;
  left: 320px;
  top: 30px;
`;

const Portfolio = (props) => {
  const [storedShoesInfo, setStoredShoesInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/shoes/managed-shoesInfo').then((res) => {
      setStoredShoesInfo(res.data);
    });
  }, []); // Mount 할 때만 실행된다

  const lengthOfData = storedShoesInfo.length;

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
      <Summary
        storedShoesInfo={storedShoesInfo}
        setStoredShoesInfo={setStoredShoesInfo}
        lengthOfData={lengthOfData}
        getTotalAsset={getTotalAsset}
        getTotalShoePrice={getTotalShoePrice}
      > {props.children} </Summary>
      <SearchTable
        storedShoesInfo={storedShoesInfo}
        setStoredShoesInfo={setStoredShoesInfo}
      > {props.children} </SearchTable>
      {/* <PortfolioBoard> {props.children} </PortfolioBoard> */}
    </ContentsWrap>
  )
};

export default Portfolio;
