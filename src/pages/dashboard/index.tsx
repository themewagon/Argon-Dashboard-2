import { Box, Grid } from '@mui/material';
import PageHeader from 'components/common/PageHeader';
import SalesBarChart from 'pages/dashboard/chart/bar-chart/SalesBarChart';
import TeamMembers from 'pages/dashboard/members/TeamMembers';
import OrdersSection from 'pages/dashboard/orders/OrdersSection';
import ProgressTracker from 'pages/dashboard/progressTracker/ProgressTracker';
import StatisticsCards from 'pages/dashboard/statistics/StatisticCards';
import TopProductsTable from 'pages/dashboard/table/TopProductsTable';
import TransactionTable from 'pages/dashboard/table/TransactionTable';
import TodoList from 'pages/dashboard/todos/TodoList';

const Dashboard = () => {
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
          <OrdersSection />
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <SalesBarChart />
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
    </Box>
  );
};

export default Dashboard;
