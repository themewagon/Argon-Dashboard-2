import { Box, Card, Checkbox, Divider, FormControlLabel, Stack, Typography } from '@mui/material';
import React from 'react';

// Todo Data
const data = [
  { id: 1, title: 'Call with Dave', time: '09:30 AM', checked: true },
  { id: 2, title: 'Brunch Meeting', time: '11:00 AM', checked: false },
  { id: 3, title: 'Argon Dashboard Launch', time: '02:00 PM', checked: false },
  { id: 4, title: 'Winter Hackathon', time: '10:30 AM', checked: true },
];

const TodoList = () => {
  return (
    <Card sx={{ height: 1, overflow: 'hidden', color: 'dark.main' }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" textTransform="capitalize" fontWeight="medium">
          To Do List
        </Typography>
      </Box>
      <Box sx={{ pb: 3, px: 3 }}>
        <Stack component="ul" sx={{ listStyle: 'none', display: 'flex', m: 0, p: 0 }}>
          {data.map(({ title, time, checked, id }) => (
            <React.Fragment key={id}>
              <Stack
                component="li"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ py: 1, width: '100%' }}
              >
                <FormControlLabel
                  labelPlacement="start"
                  control={
                    <Checkbox
                      size="small"
                      defaultChecked={checked}
                      color="primary"
                      sx={{ flexDirection: 'row-reverse' }}
                    />
                  }
                  label={
                    <Box sx={{ lineHeight: 1, flexGrow: 1 }}>
                      <Typography variant="h6">{title}</Typography>
                      <Typography variant="caption" fontWeight="regular">
                        {time}
                      </Typography>
                    </Box>
                  }
                  sx={{
                    margin: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                />
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

export default TodoList;
