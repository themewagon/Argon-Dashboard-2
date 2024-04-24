// Team member Images
import { Avatar, Box, Button, Card, Chip, Divider, Grid, Typography } from '@mui/material';
import person1 from 'assets/images/team/team-1.jpg';
import person2 from 'assets/images/team/team-2.jpg';
import person3 from 'assets/images/team/team-3.jpg';
import person4 from 'assets/images/team/team-4.jpg';
import React from 'react';

// Team member Data
interface TeamMember {
  img: string;
  name: string;
  status: string;
  badge: 'success' | 'warning' | 'error' | 'default' | 'primary' | 'secondary' | 'info';
}
const data: TeamMember[] = [
  { img: person1, name: 'John Michael', status: 'online', badge: 'success' },
  { img: person2, name: 'Alex Smith', status: 'in meeting', badge: 'warning' },
  { img: person3, name: 'Samantha Ivy', status: 'offline', badge: 'error' },
  { img: person4, name: 'John Michael', status: 'online', badge: 'success' },
];

const TeamMembers = () => {
  return (
    <Card sx={{ height: '100%', overflow: 'hidden', color: 'dark.main' }}>
      <Box p={3}>
        <Typography variant="h5" textTransform="capitalize" fontWeight="medium">
          Team Members
        </Typography>
      </Box>
      <Box pb={3} px={3}>
        <Box
          component="ul"
          display="flex"
          flexDirection="column"
          m={0}
          p={0}
          sx={{ listStyle: 'none' }}
        >
          {data.map(({ img, name, badge }, key) => (
            <React.Fragment key={key}>
              <Box component="li" py={1}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item alignItems="center">
                    <Avatar src={img} alt={name} />
                  </Grid>
                  <Grid item lineHeight={1.4}>
                    <Typography variant="h6" color="dark.main">
                      {name}
                    </Typography>
                    <Chip
                      label="primary"
                      sx={{ bgcolor: `${badge}.light`, color: `${badge}.dark` }}
                    />
                  </Grid>
                  <Grid item ml="auto">
                    <Button variant="outlined" color="primary" size="small">
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              {key !== data.length - 1 && (
                <Divider
                  sx={({ palette: { grey } }) => ({
                    borderTop: 1,
                    borderTopColor: grey[300],
                    m: 0,
                    p: 0,
                    opacity: 0.5,
                  })}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Card>
  );
};

export default TeamMembers;
