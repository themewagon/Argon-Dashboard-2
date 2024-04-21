// Images
import { Avatar, Box, Card, Divider, LinearProgress, Typography } from '@mui/material';
import img1 from 'assets/images/logo-jira.svg';
import img4 from 'assets/images/logo-slack.svg';
import img3 from 'assets/images/logo-spotify.svg';
import img2 from 'assets/images/logo-xd.svg';
import React from 'react';

// Proagress Data
const data = [
  { img: img1, name: 'React Material Dashboard', progress: 90, color: 'secondary' },
  { img: img2, name: 'Argon Design System', progress: 60, color: 'error' },
  { img: img3, name: 'VueJs Now UI Kit PRO', progress: 100, color: 'success' },
  { img: img4, name: 'Soft UI Dashboard', progress: 72, color: 'info' },
];
const ProgressTracker = () => {
  return (
    <Card sx={{ height: '100%', overflow: 'hidden' }}>
      <Box p={3}>
        <Typography variant="h5" textTransform="capitalize" fontWeight="medium">
          Progress Track
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
          {data.map(({ img, name, progress, color }, key) => (
            <React.Fragment key={key}>
              <Box component="li" py={1}>
                <Box display="flex" alignItems="center" width="100%">
                  <Avatar src={img} alt={name} />
                  <Box width="100%" ml={3}>
                    <Typography variant="h6" mb={1}>
                      {name}
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={progress}
                      sx={{
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: `${color}.main`,
                          width: `${progress}%`,
                          color: `text.secondary`,
                        },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              {key !== data.length - 1 && (
                <Divider
                  sx={({ palette: { grey }, typography: { pxToRem } }) => ({
                    borderTop: `${pxToRem(1)} solid ${grey[300]}`,
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

export default ProgressTracker;
