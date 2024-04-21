import { Grid } from '@mui/material';
import CustomStatisticsCard from 'components/common/StatisticsCard';
import StatisticsUserIcon from 'components/icons/StatisctisUser';
import StatisticsClientIcon from 'components/icons/StatisticsClient';
import StatisticsMoneyIcon from 'components/icons/StatisticsMoney';
import StatisticsSaleIcon from 'components/icons/StatisticsSale';

const CardSection = () => {
  return (
    <Grid container spacing={3} mb={3.5}>
      <Grid item xs={12} md={6} lg={3}>
        <CustomStatisticsCard
          title="today's money"
          count="$53,000"
          percentage={{ color: 'success', count: '+55%', text: 'since yesterday' }}
          icon={{ gradient: 'primary', component: StatisticsMoneyIcon }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CustomStatisticsCard
          title="today's money"
          count="$53,000"
          percentage={{ color: 'success', count: '+3%', text: 'since last week' }}
          icon={{ gradient: 'error', component: StatisticsUserIcon }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CustomStatisticsCard
          title="today's money"
          count="$53,000"
          percentage={{ color: 'error', count: '-5%', text: 'since last quater' }}
          icon={{ gradient: 'success', component: StatisticsClientIcon }}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CustomStatisticsCard
          title="today's money"
          count="$53,000"
          percentage={{ color: 'success', count: '+15%', text: 'than last month' }}
          icon={{ gradient: 'warning', component: <StatisticsSaleIcon /> }}
        />
      </Grid>
    </Grid>
  );
};

export default CardSection;
