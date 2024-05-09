import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const AppBarComponent: Components<Omit<Theme, 'components'>>['MuiAppBar'] = {
  defaultProps: {},

  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: 'none',
      backgroundColor: theme.palette.common.white,
      color: theme.palette.text.secondary,
      '& > *': {
        transition: theme.transitions.create('all', {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.standard,
        }),
      },
    }),
  },
};

export default AppBarComponent;
