import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputLabelComponent: Components<Omit<Theme, 'components'>>['MuiInputLabel'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      position: 'relative',
      transform: 'none',
      color: theme.palette.text.secondary,
      paddingLeft: theme.spacing(1.75),
      '&.Mui-focused': {
        color: theme.palette.text.primary,
      },
    }),
  },
};

export default InputLabelComponent;
