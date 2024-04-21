import { Box, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import pxToRem from 'theme/functions/pxToRem';

interface ListItemProps {
  name: string;
  icon: React.JSX.Element;
  active: boolean;
}

const CustomListItem = ({ name, icon, active }: ListItemProps) => {
  return (
    <ListItem>
      <Box
        sx={(theme) => ({
          width: '100%',
          background: active ? theme.palette['grey'][100] : 'transparent.main',
          display: 'flex',
          alignItems: 'center',
          padding: `${pxToRem(10.8)} ${pxToRem(16)} ${pxToRem(10.8)} ${pxToRem(16)}`,
          margin: `0 ${pxToRem(8)}`,
          borderRadius: `${pxToRem(8)}`,
          userSelect: 'none',
          whiteSpace: 'nowrap',
          //   boxShadow: boxShadow([0, 20], [27, 0], theme.palette.black.main, 0.05),
        })}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} />
      </Box>
    </ListItem>
  );
};

export default CustomListItem;
