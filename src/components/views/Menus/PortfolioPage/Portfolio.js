import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SearchTable from './PortfolioTable/SearchTable';
import Summary from './PortfolioSummary/Summary';
import { SERVER_URL } from '../../../../constants/index';
import Layout from '../../../Layout/Layout';
import axios from 'axios';

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
    <Layout>
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
    </Layout>
  );
};

export default Portfolio;
