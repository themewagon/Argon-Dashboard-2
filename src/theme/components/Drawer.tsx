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
      margin: theme.spacing(2, 0, 2, 2),
      borderRadius: theme.shape.borderRadius * 4,
      border: 'none',
    }),
    // opens from the left
    paperAnchorDockedLeft: {
      borderRight: 'none',
    },
  },
};

export default DrawerComponent;
