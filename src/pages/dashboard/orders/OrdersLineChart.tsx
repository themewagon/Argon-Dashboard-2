import ReactEchart from 'components/base/ReactEchart';
import EChartsReactCore from 'echarts-for-react/lib/core';
import 'echarts/lib/component/tooltip';
import echarts, { ECOption } from 'helpers/echart-ref';
import 'index.css';

interface ReactEChartProps {
  option: ECOption;
  chartRef: React.MutableRefObject<EChartsReactCore | null>;
}
const OrdersLineChart = ({ option, chartRef }: ReactEChartProps) => {
  return (
    <ReactEchart
      echarts={echarts}
      option={option}
      ref={chartRef}
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'end',
        overflow: 'visible',
      }}
    />
  );
};

export default OrdersLineChart;
