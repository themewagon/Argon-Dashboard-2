import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const InputBaseComponent: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    input: ({ theme }) => ({
      width: '100%',
      height: pxToRem(22),
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,

      '&::placeholder': {
        opacity: 1,
        color: theme.palette.grey['600'],
      },
    }),

    inputSizeSmall: () => ({
      height: pxToRem(14),
    }),
  },
};

export default InputBaseComponent;
