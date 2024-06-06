// Images
import { Avatar, Box, Card, Divider, LinearProgress, Stack, Typography } from '@mui/material';
import img1 from 'assets/images/logo-jira.svg';
import img4 from 'assets/images/logo-slack.svg';
import img3 from 'assets/images/logo-spotify.svg';
import img2 from 'assets/images/logo-xd.svg';
import React from 'react';

interface ProgressTrackerOptions {
  id: number;
  img: string;
  name: string;
  progress: number;
  color: string;
}
// Proagress Data
const data: ProgressTrackerOptions[] = [
  { id: 1, img: img1, name: 'React Material Dashboard', progress: 90, color: 'secondary' },
  { id: 2, img: img2, name: 'Argon Design System', progress: 60, color: 'error' },
  { id: 3, img: img3, name: 'VueJs Now UI Kit PRO', progress: 100, color: 'success' },
  { id: 4, img: img4, name: 'Soft UI Dashboard', progress: 72, color: 'info' },
];
const ProgressTracker = () => {
  return (
    <Card sx={{ height: 1, overflow: 'hidden' }}>
      <Box p={3}>
        <Typography variant="h5" textTransform="capitalize" fontWeight="medium">
          Progress Track
        </Typography>
      </Box>
      <Box sx={{ pb: 3, px: 3 }}>
        <Stack component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }}>
          {data.map(({ id, img, name, progress, color }) => (
            <React.Fragment key={id}>
              <Stack component="li" direction="row" alignItems="center" sx={{ py: 1, width: 1 }}>
                <Avatar src={img} alt={name} />
                <Stack sx={{ width: 1, ml: 3 }}>
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
                </Stack>
              </Stack>
              {id !== data.length - 1 && (
                <Divider
                  sx={{
                    borderTop: 1,
                    borderTopColor: 'grey.300',
                    m: 0,
                    p: 0,
                    opacity: 0.5,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Stack>
      </Box>
    </Card>
  );
};

export default ProgressTracker;
