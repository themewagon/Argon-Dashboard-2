import { Box, Grid, Paper, Typography } from '@mui/material';
import CardSection from 'components/sections/statistics/CardSection';
import ProgressTracker from '../components/ProgressTracker/ProgressTracker';
import ImageSlider from '../components/Slider/ImageSlider';
import TeamMembers from '../components/TeamMembers/TeamMembers';
import TodoList from '../components/TodoList/TodoList';
const Default = () => {
  return (
    <Box py={3}>
      <CardSection />

      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={7} zIndex={1}>
          <Paper>
            <Box px={1} pt={1}>
              <Box mb={1}>
                <Typography variant="h6">Sales Overview</Typography>
              </Box>

              <Box mb={2}>
                <Box display="flex" alignItems="center">
                  <Box fontSize={'1.5rem'} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    Icon{' '}
                  </Box>
                  <Typography variant="button" color="text" fontWeight="medium">
                    4% more{' '}
                    <Typography variant="button" color="text" fontWeight="regular">
                      in 2022
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={5}>
          <ImageSlider />
        </Grid>
      </Grid>

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
    </Box>
  );
};

export default Default;
