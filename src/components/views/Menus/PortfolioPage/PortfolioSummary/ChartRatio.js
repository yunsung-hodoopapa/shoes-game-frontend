import React, { useState, useEffect} from "react";
import { Bar } from 'react-chartjs-2';
import styled from "styled-components";
import { Chart, ArcElement, Tooltip, Legend, Title, CategoryScale, registerables } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend, Title, CategoryScale, ...registerables );

const ChartWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  height: 350px;
  background-color: #fbebeb;
`
const SectionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 150px;
  margin: 5px 5px;
  background-color: tomato;
`
const ChartRatio = ({
  storedShoesInfo,
  getTotalAsset,
  getTotalShoePrice,
  getPricefromData,
  getResellPricefromData,
  getLabelfromData,
}) => {

  const priceData = getPricefromData();
  const lables = getLabelfromData();
  const resellPriceData = getResellPricefromData();

  const data = {
    labels: getLabelfromData(),
    datasets: [
      {
        label: '구매가격',
        data: priceData,
        backgroundColor: "rgba(87, 121, 234, 0.6)",
        borderColor: "rgba(87, 121, 234, 0.6)",
        order: 1,
      },
      {
        label: '리셀가격',
        data: resellPriceData,
        backgroundColor: "rgba(18, 200, 150, 0.6)",
        borderColor: "rgba(87, 121, 234, 0.6)",
        order: 1,
      },
    ], 
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 3000,
      easing: "easeInBounce",
    },
    title: {
      display: true,
      text: "투자현황",
      fontSize: 25,
    },
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: false,
            labelString: "보유 아이템",
          },
          stacked: "true",
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Values",
          },
          stacked: "true",
        },
      ],
    },
  }

  return (
    <>
      <ChartWrap>
        <Bar
          data={data}
          options={options}
        />
      </ChartWrap>
    </>
  );
};

export default ChartRatio;

// function SummeryBox ({ lengthOfData, getTotalAsset, getTotalShoePrice }) {
//   const AssetBox = (props) => {
//     return (
//       <>
//         <SectionBox>
//           총 리셀 가격 : {props.totalAsset}
//         </SectionBox>
//       </>
//     );
//   }

//   const PriceBox = (props) => {
//     return (
//       <>
//         <SectionBox>
//           총 구매가격 : {props.totalShoePrice}
//         </SectionBox>
//       </>
//     );
//   }

//   const BenefitBox = (props) => {
//     return (
//       <>
//         <SectionBox>
//           이익 : {Number(props.totalAsset) - Number(props.totalShoePrice)}
//         </SectionBox>
//       </>
//     )
//   }
  
//   return (
//     <SummaryWrap>
//       <AssetBox
//         totalAsset={getTotalAsset()}
//       />
//       <SectionBox> 항목 수 : {lengthOfData} </SectionBox>
//       <PriceBox
//         totalShoePrice={getTotalShoePrice()}
//       /> 
//       <BenefitBox
//         totalAsset={getTotalAsset()}
//         totalShoePrice={getTotalShoePrice()}
//       />
//     </SummaryWrap>
//   );
// }
