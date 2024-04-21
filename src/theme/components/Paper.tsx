import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const PaperComponent: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      backgroundClip: 'border-box',
      overflowWrap: 'break-word',
      margin: 0,
      padding: 0,
    },
    rounded: { borderRadius: pxToRem(16) },
  },
};

export default PaperComponent;
