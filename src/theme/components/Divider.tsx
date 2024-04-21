import { alpha, Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const DividerComponent: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.transparent.main,
      backgroundImage: `linear-gradient(to right, ${alpha(theme.palette.dark.main, 0)}, ${alpha(
        theme.palette.dark.main,
        0.4,
      )}, ${alpha(theme.palette.dark.main, 0)}) !important`,
      height: pxToRem(1),
      margin: `${pxToRem(16)} 0`,
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0,
      opacity: 0.3,
    }),
  },
};

export default DividerComponent;
