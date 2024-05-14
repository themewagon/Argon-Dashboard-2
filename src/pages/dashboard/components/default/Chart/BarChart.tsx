import { Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import ReactEchart from 'components/base/ReactEchart';
import * as echarts from 'echarts';
import { useBreakpoints } from 'providers/useBreakPoint';
import { optionBarchart } from './chart-data';

const BarchartSection = () => {
  const { up } = useBreakpoints();
  const upLg = up('lg');
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
          <ReactEchart
            echarts={echarts}
            option={optionBarchart}
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

export default BarchartSection;
