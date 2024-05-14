import { Grid, SvgIconProps } from '@mui/material';
import CartIcon from 'components/icons/menu-icons/CartIcon';
import CustomersIcon from 'components/icons/menu-icons/CustomersIcon';
import DollarIcon from 'components/icons/menu-icons/DollarIcon';
import PersonalSettingsIcon from 'components/icons/menu-icons/PersonalSettingsIcon';
import StatisticsCardItem from './StatisticsCardItem';

interface PercentageProps {
  color: string;
  count: string;
  text?: string;
}
export interface IStatisticsCard {
  title: string;
  subtitle: string;
  percentage: PercentageProps;
  icon: (props: SvgIconProps) => JSX.Element;
}

const stats: IStatisticsCard[] = [
  {
    percentage: { color: 'success', count: '22.45%' },
    icon: DollarIcon,
    title: '$10.540',
    subtitle: 'Total Revenue',
  },

  {
    percentage: { color: 'success', count: '22.45%' },
    icon: CartIcon,
    title: '$1,056',
    subtitle: 'Orders',
  },
  {
    percentage: { color: 'error', count: '02.45%' },
    icon: PersonalSettingsIcon,
    title: '$0,056',
    subtitle: 'Active Sessions',
  },
  {
    percentage: { color: 'error', count: '00.45%' },
    icon: CustomersIcon,
    title: '$0,056',
    subtitle: 'Total Sessions',
  },
];

const StatisticsCards = () => {
  return (
    <Grid container spacing={0.25}>
      {stats.map((cardItem, i) => (
        <Grid item xs={12} sm={6} lg={3} key={i}>
          <StatisticsCardItem cardData={cardItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatisticsCards;
