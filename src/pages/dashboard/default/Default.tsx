import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import CardSection from 'components/sections/statistics/CardSection';
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
          <Paper>
            <Box px={1} pt={1}>
              <Box mb={1}>
                <Typography variant="h6">Sales Overview</Typography>
              </Box>

              <>
                <Stack direction="row" alignItems="center" mb={2}>
                  <Box
                    sx={{ fontSize: '1.5rem', color: 'success', mb: 0.3, mr: 0.5, lineHeight: 0 }}
                  >
                    Icon
                  </Box>
                  <Typography variant="button" color="text" fontWeight="medium">
                    4% more
                    <Typography variant="button" color="text" fontWeight="regular">
                      in 2022
                    </Typography>
                  </Typography>
                </Stack>
              </>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={5}>
          <ImageSlider />
        </Grid>
      </Grid>
      {/* /* ------------- Team section ---------------- */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={6} lg={4}>
          <TeamMembers />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TodoList />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <ProgressTracker />
        </Grid>
      </Grid>
      {/* /* ------------- Table section ---------------- **/}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <UserTable />
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default Default;
