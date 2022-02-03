import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  registerables,
} from 'chart.js';
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  ...registerables
);

const ChartWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  height: 100%;
  background-color: #ffffff;
  margin-left: 1rem;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ChartRatio = ({
  getPricefromData,
  getResellPricefromData,
  getLabelfromData,
}) => {
  const priceData = getPricefromData();
  const resellPriceData = getResellPricefromData();

  const sumOfBuyingCost = priceData.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);

  const sumOfResellPrice = resellPriceData.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);

  const data = {
    labels: ['투자현황'],
    datasets: [
      {
        label: '구매가격',
        data: [sumOfBuyingCost],
        backgroundColor: 'rgba(87, 121, 234, 0.6)',
        borderColor: 'rgba(87, 121, 234, 0.6)',
        order: 1,
      },
      {
        label: '리셀가격',
        data: [sumOfResellPrice],
        backgroundColor: 'rgba(18, 200, 150, 0.6)',
        borderColor: 'rgba(87, 121, 234, 0.6)',
        order: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 3000,
      easing: 'easeInBounce',
    },
    title: {
      display: true,
      text: '투자현황',
      fontSize: 25,
    },
    legend: {
      display: false,
    },
  };

  return (
    <>
      <ChartWrap>
        <Bar data={data} options={options} />
      </ChartWrap>
    </>
  );
};

export default ChartRatio;
