import { Box, Card, Grid, Stack, SvgIconProps, Typography } from '@mui/material';
import linearGradient from 'theme/functions/linearGradient';
import { theme } from 'theme/theme';

interface PercentageProps {
  color: string;
  count: string;
  text: string;
}

interface StatisticsCardProps {
  title: string;
  count: string;
  percentage: PercentageProps;
  icon: IconProps;
}

interface IconProps {
  gradient: keyof typeof theme.palette.gradients;
  component: React.JSXElementConstructor<SvgIconProps>;
}
const CustomStatisticsCard = ({ title, count, percentage, icon }: StatisticsCardProps) => {
  const { component: IconComponent } = icon;

  return (
    <Card>
      <Box px={3} py={2}>
        <Grid container>
          <Grid item xs={8}>
            <Box ml={0} lineHeight={1}>
              <Typography variant="button" textTransform="uppercase" color="text.secondary">
                {title}
              </Typography>
              <Typography variant="h5" fontWeight="bold" mb={1}>
                {count}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="row" justifyContent="flex-end" alignItems="center" ml="auto">
              <Box
                sx={(theme) => ({
                  display: 'grid',
                  width: 48,
                  height: 48,
                  borderRadius: theme.shape.borderRadius * 40,
                  placeItems: 'center',
                  background: `${linearGradient(theme.palette.gradients[icon.gradient].main, theme.palette.gradients[icon.gradient].state)}`,
                })}
              >
                <IconComponent />
              </Box>
            </Stack>
          </Grid>
        </Grid>
        <Stack direction="row" alignItems="center">
          <Typography variant="button" fontWeight="bold" color={`${percentage.color}.main`}>
            {percentage.count}
          </Typography>
          <Typography variant="body2" ml={1} color="text.secondary">
            {percentage.text}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};

export default CustomStatisticsCard;
