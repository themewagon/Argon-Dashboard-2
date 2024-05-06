import { Box, Grid } from '@mui/material';
import CardSection from 'components/sections/statistics/CardSection';
import Categories from '../components/default/Categories/Categories';
import LineChartSection from '../components/default/Chart/LineChart';
import ProgressTracker from '../components/default/ProgressTracker/ProgressTracker';
import ImageSlider from '../components/default/Slider/ImageSlider';
import UserTable from '../components/default/Table/UserTable';
import TeamMembers from '../components/default/TeamMembers/TeamMembers';
import TodoList from '../components/default/TodoList/TodoList';

const Default = () => {
  return (
    <Box py={3}>
      <CardSection />
      {/* /* ------------- Chart section ---------------- */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={7} zIndex={1}>
          <LineChartSection />
        </Grid>
        <Grid item xs={12} lg={5}>
          <ImageSlider />
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
