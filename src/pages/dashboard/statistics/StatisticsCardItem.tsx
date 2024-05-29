import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useBreakpoints } from 'providers/useBreakPoint';
import { IStatisticsCard } from './StatisticCards';

interface StatisticsCardProps {
  cardData: IStatisticsCard;
  index: number;
}

const StatisticsCardItem = ({ cardData, index }: StatisticsCardProps) => {
  const { title, subtitle, percentage, icon: IconComponent } = cardData || {};
  const { up } = useBreakpoints();
  const upLg = up('lg');
  const upSm = up('sm');

  return (
    <>
      <Card
        sx={(theme) => ({
          borderRadius: theme.shape.borderRadius * 1,
          ...(upSm && {
            borderTopLeftRadius: index === 0 || index === 2 ? theme.shape.borderRadius * 2 : 0,
            borderBottomLeftRadius: index === 0 || index === 2 ? theme.shape.borderRadius * 2 : 0,
            borderTopRightRadius: index === 1 || index === 3 ? theme.shape.borderRadius * 2 : 0,
            borderBottomRightRadius: index === 1 || index === 3 ? theme.shape.borderRadius * 2 : 0,
          }),
          ...(upLg && {
            borderTopLeftRadius: index === 0 ? theme.shape.borderRadius * 2 : 0,
            borderBottomLeftRadius: index === 0 ? theme.shape.borderRadius * 2 : 0,
            borderTopRightRadius: index === 3 ? theme.shape.borderRadius * 2 : 0,
            borderBottomRightRadius: index === 3 ? theme.shape.borderRadius * 2 : 0,
          }),
        })}
      >
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
