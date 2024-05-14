import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { IStatisticsCard } from './StatisticCards';

interface StatisticsCardProps {
  cardData: IStatisticsCard;
}

const StatisticsCardItem = ({ cardData }: StatisticsCardProps) => {
  const { title, subtitle, percentage, icon: IconComponent } = cardData || {};

  return (
    <>
      <Card>
        <Box
          sx={(theme) => ({
            p: theme.spacing(4),
            flexGrow: 1,
          })}
        >
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={8}>
              <Box ml={0} lineHeight={1}>
                <Typography variant="h5" textTransform="uppercase" color="text.primary">
                  {title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" mb={1}>
                  {subtitle}
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center">
                <Typography variant="subtitle1" color={`${percentage.color}.dark`}>
                  {percentage.count}
                </Typography>
                {percentage.color !== 'success' ? (
                  <IconifyIcon
                    color={`${percentage.color}.dark`}
                    icon="iconamoon:arrow-down-2-light"
                    width={24}
                    height={24}
                  />
                ) : (
                  <IconifyIcon
                    color={`${percentage.color}.main`}
                    icon="iconamoon:arrow-up-2-light"
                    width={24}
                    height={24}
                  />
                )}
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" justifyContent="flex-end" alignItems="center" ml="auto">
                <Box
                  sx={(theme) => ({
                    display: 'grid',
                    width: theme.spacing(7),
                    height: theme.spacing(7),
                    borderRadius: theme.shape.borderRadius * 40,
                    placeItems: 'center',
                    bgcolor: 'primary.lighter',
                  })}
                >
                  <IconComponent color="primary" />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default StatisticsCardItem;
