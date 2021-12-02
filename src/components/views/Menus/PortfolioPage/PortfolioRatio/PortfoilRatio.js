import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

const ChatWrap = styled.div`
  display: flex;
`

const data = {
  labels: ['nike', '뉴발란스', 'adidas'],
  datasets: [
    {
      data: [60, 13, 27],
      borderWidth: 2,
      hoverBorderWidth: 3,
      backgroundColor: [
        'rgba(238, 102, 121, 1)',
        'rgba(98, 181, 229, 1)',
        'rgba(255, 198, 0, 1)',
      ],
      fill: true,
    },
  ]
};

const options = {
  responsive: false
}

function PortfolioRatio() {
  return (
    <>
      <h2> 내 포트폴리오 </h2>
      <ChatWrap>
        <div> 항목수 </div>
        <Doughnut
          data={data}
          options={options}
          style={{ positon: 'relative', height: '150px', width: '300px'}} 
        />
        <div> 시장가치 </div>
        <Doughnut
          data={data}
          options={options}
          style={{ positon: 'relative', height: '150px', width: '300px'}} 
        />
      </ChatWrap>
    </>
  );
};

export default PortfolioRatio;
