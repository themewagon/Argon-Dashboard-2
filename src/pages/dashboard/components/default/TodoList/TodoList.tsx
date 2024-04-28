import { Box, Card, Checkbox, Divider, Typography } from '@mui/material';
import React from 'react';

// Todo Data
const data = [
  { title: 'Call with Dave', time: '09:30 AM', checked: true },
  { title: 'Brunch Meeting', time: '11:00 AM', checked: false },
  { title: 'Argon Dashboard Launch', time: '02:00 PM', checked: false },
  { title: 'Winter Hackathon', time: '10:30 AM', checked: true },
];

const TodoList = () => {
  return (
    <Card sx={{ height: 1, overflow: 'hidden', color: 'dark.main' }}>
      <Box p={3}>
        <Typography variant="h5" textTransform="capitalize" fontWeight="medium">
          To Do List
        </Typography>
      </Box>
      <Box pb={3} px={3} my="auto">
        <Box
          component="ul"
          display="flex"
          flexDirection="column"
          m={0}
          p={0}
          sx={{ listStyle: 'none' }}
        >
          {data.map(({ title, time, checked }, key) => (
            <React.Fragment key={key}>
              <Box
                component="li"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                py={1}
              >
                <Box lineHeight={1}>
                  <Typography variant="h6">{title}</Typography>
                  <Typography variant="caption" fontWeight={'regular'}>
                    {time}
                  </Typography>
                </Box>
                <Checkbox defaultChecked={checked} color="primary" />
                {/* <Checkbox color="secondary" defaultChecked={checked} /> */}
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

export default TodoList;
