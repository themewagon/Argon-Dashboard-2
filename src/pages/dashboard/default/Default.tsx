import { Box, Grid } from '@mui/material';
import Categories from '../components/default/Categories/Categories';
import BarchartSection from '../components/default/Chart/BarChart';
import LineChartSection from '../components/default/Chart/LineChart';
import PageHeader from '../components/default/PageHeader/PageHeader';
import ProgressTracker from '../components/default/ProgressTracker/ProgressTracker';
import StatisticsCards from '../components/default/Statistics/StatisticCards';
import UserTable from '../components/default/Table/UserTable';
import TeamMembers from '../components/default/TeamMembers/TeamMembers';
import TodoList from '../components/default/TodoList/TodoList';

const Default = () => {
  return (
    <Box py={4}>
      <PageHeader>Dashboard</PageHeader>
      {/* /* ------------- Stats section ---------------- */}

      <Grid container spacing={3} mt={1} mb={3}>
        <Grid item xs={12} lg={12}>
          <StatisticsCards />
        </Grid>
      </Grid>
      {/* /* ------------- Chart section ---------------- */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={8} zIndex={1}>
          <LineChartSection />
        </Grid>
        <Grid item xs={12} lg={4}>
          <BarchartSection />
        </Grid>
      </Grid>
      {/* /* ------------- Team section ---------------- */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={12} xl={4}>
          <TeamMembers />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <TodoList />
        </Grid>
        <Grid item xs={12} md={6} xl={4}>
          <ProgressTracker />
        </Grid>
      </Grid>
      {/* /* ------------- Table section ---------------- **/}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <UserTable />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Categories />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Default;
