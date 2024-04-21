import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const DrawerComponent: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      width: pxToRem(290),
      whiteSpace: 'nowrap',
      border: 'none',
    },
    paper: ({ theme }) => ({
      width: pxToRem(290),
      backgroundColor: theme.palette.neutral.contrastText,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: `${pxToRem(16)} 0 ${pxToRem(16)} ${pxToRem(16)}`,
      borderRadius: `${pxToRem(16)}`,
      border: 'none',
    }),
    // opens from the left
    paperAnchorDockedLeft: {
      borderRight: 'none',
    },
  },
};

export default DrawerComponent;
