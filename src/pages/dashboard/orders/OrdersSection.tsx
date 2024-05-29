import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import CircularLoader from 'components/loading/Circular';
import { ComparisonChartData, ordersOverTimeData } from 'data/dashboard/charts';
import dayjs from 'dayjs';
import EChartsReactCore from 'echarts-for-react/lib/core';
import {
  BarChart,
  // SeriesOption
  BarSeriesOption,
  LineSeriesOption,
} from 'echarts/charts';
import {
  DatasetComponentOption,
  GridComponentOption,
  LegendComponent,
  //  ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts/components';
import * as echarts from 'echarts/core';
import 'echarts/lib/component/tooltip';
import { tooltipFormatterList } from 'helpers/echart-utils';
import 'index.css';
import OrdersLineChart from 'pages/dashboard/orders/OrdersLineChart';
import { useEffect, useMemo, useRef, useState } from 'react';

// Use ComposeOption to compose an Option type that only has required components and charts
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | TooltipComponentOption
>;

// Register required components
echarts.use([BarChart, LegendComponent]);
/**
 * Functional component that renders a line chart section with dynamic data.
 * @returns JSX element representing the line chart section.
 */

// const mockData = [
//   {
//     name: 'May 11',
//     data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50)),
//     color: '#d9e1ec',
//   },
//   {
//     name: 'May 12',
//     data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50)),
//     color: '#2968fa',
//   },
// ];

const OrdersSection = () => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [chartData, setChartData] = useState<null | ComparisonChartData>(null);

  // Simulating data fetching and processing
  useEffect(() => {
    const fetchData = async () => {
      setChartData(ordersOverTimeData);
    };

    fetchData();
  }, []);

  // Memoize chart options
  const chartOptions: null | ECOption = useMemo(() => {
    if (!chartData) return null;
    const xAxisData = chartData.today.map((_, i) => `${i}am`);
    const todayLabel = dayjs().format('MMM DD');
    const yesterdayLabel = dayjs().subtract(1, 'day').format('MMM DD');
    return {
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#333752',
        textStyle: { color: '#fff' },
        borderWidth: 0,
        formatter: tooltipFormatterList,
        confine: false,
        position: function (point, params, dom, rect, size) {
          const tooltipWidth = size.contentSize[0];
          let offsetY = 70;
          if (rect !== null) {
            offsetY += rect?.height ?? 0;
          }
          return [point[0] - tooltipWidth / 2, point[1] - offsetY];
        },
      },
      legend: {
        show: false,
      },
      grid: {
        left: '2%',
        right: '1%',
        bottom: '4%',
        top: '12%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: true,
        data: xAxisData,
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
          name: todayLabel,
          type: 'line',
          data: chartData.today.map((item) => item.orders),
          color: '#2968fa',
          emphasis: {
            focus: 'none',
            scale: 4,
            itemStyle: {
              borderCap: 'round',
              borderType: 'solid',
              borderWidth: 4,
            },
          },
          showSymbol: false,
          lineStyle: {
            width: 4,
          },
          z: 2,
        },
        {
          name: yesterdayLabel,
          type: 'line',
          data: chartData.yesterday.map((item) => item.orders),
          color: '#d9e1ec',
          emphasis: {
            focus: 'none',
            scale: 4,
            itemStyle: {
              borderCap: 'round',
              borderType: 'solid',
              borderWidth: 4,
            },
          },
          showSymbol: false,
          lineStyle: {
            width: 4,
          },
          z: 1,
        },
      ],
    };
  }, [chartData]);

  const handleLegendToggle = (name: string) => {
    if (chartRef.current) {
      const instance = chartRef.current.getEchartsInstance();
      instance.dispatchAction({
        type: 'legendToggleSelect',
        name: name,
      });
    }
  };

  /**
   * Adds an event listener for window resize to handle manual chart resizing using Echarts.
   * It resizes the chart instance when the window is resized.
   */
  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        const instance = chartRef.current.getEchartsInstance();
        instance.resize();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Card sx={{ height: 1 }}>
      <CardContent sx={{ flex: 1, p: 2 }}>
        <Stack
          direction="row"
          sx={({ spacing }) => ({
            px: spacing(1.5),
            pt: spacing(1.5),
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: spacing(3),
          })}
        >
          <Typography variant="h6">Orders Over Time</Typography>
          <Stack direction="row" alignItems="center">
            <Typography variant="subtitle1" color="text.secondary">
              Last 12 hours
            </Typography>
            <IconifyIcon
              icon="iconamoon:arrow-down-2-light"
              sx={({ spacing }) => ({ ml: 1, width: spacing(3), height: spacing(3) })}
            />
          </Stack>
        </Stack>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center', mt: 2 }}
        >
          <Stack
            spacing={{ xs: 0 }}
            sx={{
              px: 1.5,
              gap: { xs: 2, sm: 4 },
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Box>
              <Typography variant="h5">645</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Orders on May 22
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5">645</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Orders on May 22
              </Typography>
            </Box>
          </Stack>
          {chartOptions ? (
            <Stack
              direction="row"
              spacing={0.5}
              sx={({ spacing }) => ({
                justifyContent: 'center',
                mt: spacing(2),
                pr: spacing(1),
                flexDirection: { xs: 'column', sm: 'row' },
              })}
            >
              {Array.isArray(chartOptions.series) &&
                chartOptions.series
                  .filter((series) => typeof series.name === 'string')
                  .map((series) => (
                    <Button
                      size="small"
                      startIcon={<IconifyIcon icon="ic:round-square" color={`${series.color}`} />}
                      key={series.name}
                      variant="text"
                      sx={{ color: 'text.secondary' }}
                      onClick={() => handleLegendToggle(series.name as string)}
                    >
                      {series.name}
                    </Button>
                  ))}
            </Stack>
          ) : (
            <Typography
              variant="body2"
              sx={({ spacing }) => ({
                mr: spacing(5),
                color: 'text.secondary',
              })}
            >
              Loading...
            </Typography>
          )}
        </Stack>
        <Box
          sx={({ spacing }) => ({
            height: 300,
            display: 'flex',
            mt: spacing(3),
            placeItems: 'center',
            justifyContent: 'center',
          })}
        >
          {chartOptions ? (
            <OrdersLineChart option={chartOptions} chartRef={chartRef} />
          ) : (
            <CircularLoader />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrdersSection;
