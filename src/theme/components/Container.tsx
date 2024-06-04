import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ContainerComponent: Components<Omit<Theme, 'components'>>['MuiContainer'] = {
  defaultProps: { maxWidth: false, disableGutters: true },
  styleOverrides: {
    root: ({ theme }) => ({
      //   maxWidth: '100%!important',
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    }),
  },
};

export default ContainerComponent;
