import {
  BarSeriesOption,
  ComposeOption,
  DatasetComponentOption,
  GridComponentOption,
  LineSeriesOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts';
import { BarChart, LineChart } from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout } from 'echarts/features';

type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
]);
export const optionLinechart: ECOption = {
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#333752',
    textStyle: { color: '#fff' },
    formatter: '{c0} Orders<br /> {a0}, {b0}',
    confine: true,
  },

  legend: {
    data: [
      { name: 'May 11', icon: 'square' },
      { name: 'May 12', icon: 'square' },
    ],
    orient: 'horizontal',
    textStyle: {
      color: '#5a607f',
      fontSize: '14px',
      padding: [0, 0, 0, 6],
    },
    top: '1%',
    right: '3%',
    itemWidth: 14,
    itemHeight: 16,
    itemGap: 20,
  },
  grid: {
    left: '2%',
    right: '-1%',
    bottom: '4%',
    top: '12%',
    containLabel: true,
  },

  xAxis: {
    type: 'category',
    boundaryGap: true,
    data: ['4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm'],
    axisTick: {
      show: false,
    },

    axisLine: {
      onZero: false,
      show: false,
    },
    axisLabel: {
      color: '#a1a7c3',
      fontSize: '12px',
      margin: 30,
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#a1a7c3',
      fontSize: '12px',
      margin: 17,
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        dashOffset: 55,
        miterLimit: 10,
        width: 1.1,
        join: 'bevel',
        cap: 'butt',
      },
    },
  },
  series: [
    {
      name: 'May 11',
      type: 'line',
      color: '#d9e1ec',
      emphasis: {
        focus: 'series',
        scale: 4,
        itemStyle: {
          borderCap: 'round',
          borderType: 'solid',
          borderWidth: 4,
        },
      },
      data: [32.0, 5.2, 5.1, 25.4, 25.0, 26.0, 31.0, 10.0, 20.0, 35.0, 40.0, 42.0],

      showSymbol: false,
      lineStyle: {
        width: 4,
      },
    },
    {
      name: 'May 12',
      type: 'line',
      color: '#2968fa',
      emphasis: {
        focus: 'series',
        scale: 4,
        itemStyle: {
          borderCap: 'round',
          borderType: 'solid',
          borderWidth: 4,
        },
      },

      data: [12.0, 9.2, 19.1, 12.4, 32.0, 38.0, 29.0, 34.0, 50.0, 41.0, 26.0, 29.0],
      showSymbol: false,
      lineStyle: {
        width: 4,
      },
    },
  ],
};

export const optionBarchart: ECOption = {
  xAxis: {
    type: 'category',
    data: ['12', '13', '14', '15', '16', '17', '18'],
    boundaryGap: false,
    nameGap: 0,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      margin: 14,
      fontSize: 12,
    },
  },
  yAxis: {
    type: 'value',
    show: false,
  },
  grid: {
    left: '-2%',
    top: '12%',
    right: '2%',
    containLabel: true,
    bottom: '0%',
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: '#333752',
    textStyle: { color: '#fff' },
    formatter: `&dollar;{c0}`,
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      barGap: '0%',
      barCategoryGap: '0%',
      emphasis: {
        itemStyle: {
          color: '#06A561',
        },
      },
      itemStyle: {
        borderRadius: [40, 40],
        color: '#1FD286',
      },
      barWidth: 8,
      //   coordinateSystem: 'polar',
    },
  ],
};
