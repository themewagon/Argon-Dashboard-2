// export const gradientLineChartData = {
//   labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   datasets: [
//     {
//       label: 'Mobile apps',
//       color: 'info',
//       data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
//     },
//   ],
// };
import * as echarts from 'echarts';

const gradient = new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
  {
    offset: 0,
    color: 'rgba(94,114,228,0.2)',
  },
  {
    offset: 1,
    color: 'rgba(72, 72, 176,0)',
  },
]);

export const option = {
  grid: {
    left: '0%',
    right: '0%',
    bottom: '3%',
    height: 'auto',
    border: 0,
    containLabel: true,
  },
  xAxis: {
    onZero: false,
    type: 'category',
    // boundaryGap: false,
    splitLine: {
      show: false,
    },
    scale: true,
    data: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    namegap: 'auto',
    axisLine: {
      show: false,
      symbol: 'none',
    },
    axisTick: {
      show: false,
    },

    axisLabel: {
      color: '#CED4DA',
      fontSize: '12px',
      fontWeight: 700,
      align: 'middle',
      overflow: 'truncate',
    },
  },
  yAxis: {
    type: 'value',
    max: 500,
    axisTick: {
      length: 1,
    },
    axisLabel: false,
    splitLine: {
      lineStyle: {
        type: 'dashed',
        width: 1.5,
        color: '#DEE2E6',
      },
    },
  },
  tooltip: {
    trigger: 'axis',
  },
  series: [
    {
      data: [140, 232, 101, 264, 90, 340, 250, 264, 90],
      type: 'line',

      smooth: true,
      lineStyle: {
        width: 3,
        color: 'rgb(90,106,250)',
      },
      showSymbol: false,

      areaStyle: { opacity: 1, color: { ...gradient } },
    },
  ],
};
