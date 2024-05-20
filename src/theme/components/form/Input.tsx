import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputComponent: Components<Omit<Theme, 'components'>>['MuiInput'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '&:before, &:after': {
        display: 'none',
      },
    },
    input: {},
  },
};

export default InputComponent;
