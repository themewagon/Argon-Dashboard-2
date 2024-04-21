import { alpha, Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const CardComponent: Components<Omit<Theme, 'components'>>['MuiCard'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: theme.palette.white.main,
      backgroundClip: 'border-box',
      border: `${theme.spacing(0)} solid ${alpha(theme.palette.black.main, 0.125)}`,
      borderRadius: pxToRem(16),
      boxShadow: theme.shadows[2],
    }),
  },
};

export default CardComponent;
