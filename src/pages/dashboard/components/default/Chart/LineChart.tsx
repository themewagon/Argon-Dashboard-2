import { Box, Card, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import ReactEchart from 'components/base/ReactEchart';
import * as echarts from 'echarts';
import { useBreakpoints } from 'providers/useBreakPoint';
import { option } from './LineChartData';

const LineChartSection = () => {
  const { up } = useBreakpoints();
  const upLg = up('lg');

  return (
    <Card sx={{ height: 1 }}>
      <Box sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ px: 1, pt: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Sales Overview
          </Typography>

          <>
            <Stack direction="row" alignItems="center" mb={2}>
              <Box
                sx={({ typography }) => ({
                  fontSize: typography.pxToRem(18),
                  color: 'success.main',
                  mb: 0.3,
                  mr: 0.5,
                  lineHeight: 0,
                })}
              >
                <IconifyIcon icon="solar:arrow-up-linear" />
              </Box>
              <Typography variant="button" color="success.main" fontWeight="medium">
                4% more
                <Typography
                  variant="button"
                  color="text.secondary"
                  fontWeight="regular"
                  sx={{ ml: 1 }}
                >
                  in 2022
                </Typography>
              </Typography>
            </Stack>
          </>
        </Box>

        <>
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
        </>
      </Box>
    </Card>
  );
};

export default LineChartSection;
