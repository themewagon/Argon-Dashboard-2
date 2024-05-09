import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const SvgIconComponent: Components<Omit<Theme, 'components'>>['MuiSvgIcon'] = {
  defaultProps: {},
  styleOverrides: {
    fontSizeLarge: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(38),
    }),
  },
};

export default SvgIconComponent;
