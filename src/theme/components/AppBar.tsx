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
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(2),
      },

      '& > .MuiToolbar-root': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 0,
        [theme.breakpoints.up('sm')]: {
          minHeight: 'auto',
          padding: theme.spacing(0.5, 2),
        },
      },
    }),
  },
};

export default AppBarComponent;
