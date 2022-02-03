import React from 'react';
import { Pie } from 'react-chartjs-2';
import { colorContainer } from '../../../../../constants';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
Chart.register(ArcElement, Tooltip, Legend, Title );

const ProfitRatio = ({
  getResellPricefromData,
  getLabelfromData,
  getRandomRgba,
}) => {
  const data = getResellPricefromData();
  const labels = getLabelfromData();
  const backgroundColor = getRandomRgba();

  const chartData = {
    labels: labels,
    datasets: [{
        data: data,
        borderWidth: 1,
        hoverBorderWidth: 2,
        backgroundColor: colorContainer,
        borderColor: ['rgba(120, 122, 134, 0.8)'],
        fill: true,
        hoverOffset: 3,
      },
    ]
  };

  const options = {
    responsive: false,
    plugins: {
      title: {
        display: true,
        position: 'top',
        align: 'center',
        text: '시장가치',
        padding: {
          top: 3,
          bottom: 10,
          left: 10,
        },
      },
      legend: {
        display: true,
        position: 'left',
        align: 'end',
        labels: {
          boxWidth : 7,
          boxHeight: 6,
          font : {
            size: 8
          }
        }
      }
    },
  }
  return (
    <>
      <Pie
          data={chartData}
          options={options}
          style={{ height: '20vh', width: '50%' }}
          />
    </>
  )
}

export default ProfitRatio;