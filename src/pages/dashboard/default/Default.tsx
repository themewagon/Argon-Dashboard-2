import { Box, Grid } from '@mui/material';
import PageHeader from '../../../components/common/PageHeader';
import BarchartSection from '../components/default/Chart/BarChart';
import LineChartSection from '../components/default/Chart/LineChart';
import ProgressTracker from '../components/default/ProgressTracker/ProgressTracker';
import StatisticsCards from '../components/default/Statistics/StatisticCards';
import TopProductsTable from '../components/default/Table/TopProductsTable';
import TransactionTable from '../components/default/Table/TransactionTable';
import TeamMembers from '../components/default/TeamMembers/TeamMembers';
import TodoList from '../components/default/TodoList/TodoList';

const Default = () => {
  return (
    <Box
      sx={({ spacing }) => ({
        pb: spacing(4),
      })}
    >
      <PageHeader>Dashboard</PageHeader>
      {/* /* ------------- Stats section ---------------- */}

      <Grid container spacing={3} mt={1} mb={3}>
        <Grid item xs={12} lg={12}>
          <StatisticsCards />
        </Grid>
      </Grid>
      {/* /* ------------- Chart section ---------------- */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={7} lg={8} zIndex={1}>
          <LineChartSection />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <BarchartSection />
        </Grid>
      </Grid>
      {/* /* ------------- Table section ---------------- */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={6} zIndex={1}>
          <TransactionTable />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TopProductsTable />
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
      {/* <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <UserTable />
        </Grid>
      </Grid> */}
    </Box>
  );
};

export default Default;
