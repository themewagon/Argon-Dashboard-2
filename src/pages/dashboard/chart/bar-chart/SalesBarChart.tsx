import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import CircularLoader from 'components/loading/Circular';
import EChartsReactCore from 'echarts-for-react/lib/core';
import { ECOption } from 'helpers/echart-ref';
import { useCallback, useEffect, useRef, useState } from 'react';
import BarEChart, { generateOptions } from './BarChart';

const SalesBarChart = () => {
  const chartRef = useRef<EChartsReactCore | null>(null);
  const [chartOptions, setChartOptions] = useState<null | ECOption>(null);
  const [loading, setLoading] = useState(true);
  const [seriesData, setSeriesData] = useState<{ name: string; data: number[]; color: string }[]>(
    [],
  );
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockData = [
        {
          name: 'sales',
          data: Array.from({ length: 7 }, () => Math.floor(Math.random() * (50 - 10 + 1)) + 10),
          color: '#1FD286',
        },
      ];
      setSeriesData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const updateChartOptions = useCallback(() => {
    const options = generateOptions(seriesData);
    setChartOptions(options);
  }, [seriesData]);

  useEffect(() => {
    if (!loading) {
      updateChartOptions();
    }
  }, [loading, updateChartOptions]);

  return (
    <Card sx={{ height: 1 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h6">Last 7 Days Sales</Typography>
        <Stack
          spacing={2.5}
          sx={({ spacing }) => ({
            pt: spacing(3),
          })}
        >
          <Box>
            <Typography variant="h5">1,259</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Item Sold
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">$12,546</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Revenue
            </Typography>
          </Box>
          <Divider />
        </Stack>
        <Box
          sx={({ spacing }) => ({
            height: spacing(25),
            display: 'flex',
          })}
        >
          {chartOptions ? (
            <BarEChart option={chartOptions} chartRef={chartRef} />
          ) : (
            <CircularLoader />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default SalesBarChart;
