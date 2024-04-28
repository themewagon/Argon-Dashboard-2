import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const InputBaseComponent: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(1.25, 1.5),
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 1.5,
      color: `${theme.palette.grey[700]}`,
      backgroundColor: `${theme.palette.common.white} !important`,
      appearance: 'none',
    }),
    input: ({ theme }) => ({
      width: '100%',
      minWidth: pxToRem(200),
      height: pxToRem(22),
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: theme.spacing(0.75),

      '&::-webkit-input-placeholder': {
        color: `${theme.palette.text.secondary} !important`,
      },
    }),

    inputSizeSmall: () => ({
      height: pxToRem(14),
    }),
    adornedStart: ({ theme }) => ({
      '& .iconify': {
        marginRight: theme.spacing(0.75),
        flexShrink: 0,
        fontSize: theme.typography.pxToRem(16),
        // height: '16px !important',
        // width: '16px !important',
      },
    }),
  },
};

export default InputBaseComponent;
