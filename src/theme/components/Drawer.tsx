import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const DrawerComponent: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      width: pxToRem(270),
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },
    paper: ({ theme }) => ({
      width: pxToRem(270),
      //   backgroundColor: theme.palette.common.white,
      backgroundColor: theme.palette.transparent.main,
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.shortest,
      }),
      //   height: `calc(100vh - ${pxToRem(32)})`,
      // margin: theme.spacing(2, 0, 2, 2),
      //   marginTop: pxToRem(68),
      //   borderRadius: theme.shape.borderRadius * 4,
      //   border: 'none',
    }),
    // opens from the left
    paperAnchorDockedLeft: {
      //   borderRight: 'none',
    },
  },
};

export default DrawerComponent;
