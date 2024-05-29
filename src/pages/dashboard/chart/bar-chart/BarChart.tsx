import ReactEchart from 'components/base/ReactEchart';

import EChartsReactCore from 'echarts-for-react/lib/core';
import 'echarts/lib/component/tooltip';
import echarts, { ECOption } from 'helpers/echart-ref';

export const generateOptions = (
  seriesData: { name: string; data: number[]; color: string }[],
): ECOption => ({
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
    formatter: '&dollar;{c0}',
  },
  series: seriesData.map((series) => ({
    name: series.name,
    data: series.data,
    type: 'bar',
    barGap: '0%',
    barCategoryGap: '0%',
    emphasis: {
      itemStyle: {
        color: '#06A561',
      },
    },
    itemStyle: {
      borderRadius: [40, 40, 0, 0],
      color: series.color,
    },
    barWidth: 8,
    // coordinateSystem: 'polar',
  })),
});

interface ReactEChartProps {
  option: ECOption;
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
}
const BarEChart = ({ option, chartRef }: ReactEChartProps) => {
  return (
    <ReactEchart
      ref={chartRef}
      echarts={echarts}
      option={option}
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'end',
      }}
    />
  );
};

export default BarEChart;
