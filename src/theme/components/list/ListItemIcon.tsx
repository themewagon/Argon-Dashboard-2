import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const ListItemIconComponent: Components<Omit<Theme, 'components'>>['MuiListItemIcon'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      color: 'inherit',
      minWidth: pxToRem(32),
      minHeight: pxToRem(32),
      borderRadius: theme.shape.borderRadius * 2,
      display: 'grid',
      placeItems: 'center',
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.standard,
      }),
      '& svg, svg g': {
        fill: 'none',
        width: pxToRem(16),
        height: pxToRem(16),
      },
    }),
  },
};

export default ListItemIconComponent;
