import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import ReactEchart from 'components/base/ReactEchart';
import * as echarts from 'echarts';
import { useBreakpoints } from 'providers/useBreakPoint';
import { option } from './chart-data';

const LineChartSection = () => {
  const { up } = useBreakpoints();
  const upLg = up('lg');

  return (
    <Card sx={{ height: 1 }}>
      <CardContent sx={{ flex: 1, p: 2 }}>
        <Stack
          direction="row"
          sx={({ spacing }) => ({
            px: spacing(1.5),
            pt: spacing(1.5),
            justifyContent: 'space-between',
          })}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Orders Over Time
          </Typography>
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
        <Stack direction="row" spacing={5} sx={{ alignItems: 'center', px: 1.5 }}>
          <Stack sx={{ justifyContent: 'center' }}>
            <Typography variant="h5">645</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Orders on May 22
            </Typography>
          </Stack>
          <Stack sx={{ justifyContent: 'center' }}>
            <Typography variant="h5">645</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Orders on May 22
            </Typography>
          </Stack>
        </Stack>
        <Box sx={{ height: 300, display: 'flex' }}>
          <ReactEchart
            echarts={echarts}
            option={option}
            sx={[
              upLg && {
                flex: 1,
                display: 'flex',
                alignItems: 'end',
              },
            ]}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default LineChartSection;
