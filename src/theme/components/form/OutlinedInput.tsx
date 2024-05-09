import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const OutlinedInputComponent: Components<Omit<Theme, 'components'>>['MuiOutlinedInput'] = {
  defaultProps: {
    notched: false,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.grey['800'],
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 20,
    }),
    input: () => ({
      height: pxToRem(22),
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
    }),
    notchedOutline: {
      border: 'none',
    },
  },
};

export default OutlinedInputComponent;
