import React from 'react'
import ReactECharts from 'echarts-for-react';

const OverviewChart = () => {
    const options = {
        grid: { top: 8, right: 20, bottom: 40, left: 50 , show: true, borderWidth: 0.2, },
        xAxis: {
          type: 'category',
          data: ['10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan', '16 Jan', '17 Jan', '18 Jan'],
          splitLine: {
            show: true
          },
          boundaryGap: false,
          axisLine : {
            show: false
          },
          axisTick : {
            show: false
          },
          axisLabel: {
            margin: 16,
            padding: [0,3],
            color: "#AEAEAE",
            interval: 0
          },
          
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: "#AEAEAE",
            align: 'left',
            verticalAlign: 'top',
            margin: 50,
            formatter: function (value: string, index: number) {
              const num = parseInt(value)
              const lookup = [
                { value: 1, symbol: "" },
                { value: 1e3, symbol: "k" },
                { value: 1e6, symbol: "M" },
                { value: 1e9, symbol: "G" },
                { value: 1e12, symbol: "T" },
                { value: 1e15, symbol: "P" },
                { value: 1e18, symbol: "E" }
              ];
              const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
              var item = lookup.slice().reverse().find(function(item) {
                return num >= item.value;
              });
                return item ? (num / item.value).toFixed(1).replace(rx, "$1") + item.symbol : ``;
            }
          }, 
        },
        series: [
          {
            data: [3200,4500, 3400, 9010, 8000, 8300, 7000, 5000,3000,],
            type: 'line',
            smooth: 0.15,
            color: "#00D9B7",
            showSymbol:false,
            markLine:{
              itemStyle: {
                borderJoin: "rounded",
                borderCap: "rounded"
              }
            }
          },
          {
            data: [1500,5500, 4700, 1000, 2000, 5000, 4500,6200, 8000],
            type: 'line',
            smooth: 0.15,
            color: "#F05E78",
            showSymbol:false
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