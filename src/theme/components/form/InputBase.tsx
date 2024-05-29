import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputBaseComponent: Components<Omit<Theme, 'components'>>['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '& .Mui-focused': {
        outline: 0,
        borderColor: 'success.main',
        borderStyle: 'solid',
        boxShadow: '',
      },
      '& .Mui-disabled': {
        '& > fieldset': {},
      },
    },
    input: ({ theme }) => ({
      //   width: '100%',
      //   height: pxToRem(22),
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      margin: 0,
      '&::placeholder': {
        opacity: 1,
        color: theme.palette.grey[600],
      },
    }),
    multiline: ({ theme }) => ({
      padding: `${theme.typography.pxToRem(10)} ${theme.typography.pxToRem(12)}`,
    }),
  },
};

export default InputBaseComponent;
