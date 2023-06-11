import React from 'react'
import ReactECharts from 'echarts-for-react';
import { theme } from 'styles/theme';

const OverviewChart = () => {
    const options = {
        grid: { top: 8, right: 8, bottom: 20, left: 60 , show: true},
        xAxis: {
          type: 'category',
          data: ['10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan'],
          splitLine: {
            show: true
          }
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [4500, 3400, 9010, 8000, 8300, 7000, 3000],
            type: 'line',
            smooth: false,
            color: theme.color.lightGreen
          },
          {
            data: [5500, 4700, 1000, 2000, 5000, 4500, 8000],
            type: 'line',
            smooth: false,
            color: theme.color.negative
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };
  return (
    <ReactECharts option={options} />
  )
}

export default OverviewChart