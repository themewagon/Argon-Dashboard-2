import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const AppBarComponent: Components<Omit<Theme, 'components'>>['MuiAppBar'] = {
  defaultProps: {
    color: 'transparent',
  },

  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: 'none',
      minHeight: pxToRem(75),
      display: 'grid',
      alignItems: 'center',
      color: 'white',
      borderRadius: theme.shape.borderRadius * 4,

      '& > *': {
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.standard,
        }),
      },
      '& > .MuiAppBar-root': {
        paddingTop: pxToRem(8),
        paddingBottom: pxToRem(8),
        paddingRight: pxToRem(8),
        paddingLeft: pxToRem(16),
      },

      '& > .MuiToolbar-root': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        [theme.breakpoints.up('sm')]: {
          minHeight: 'auto',
          padding: `${pxToRem(4)} ${pxToRem(16)}`,
        },
      },
    }),
  },
};

export default AppBarComponent;
