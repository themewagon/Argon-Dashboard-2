import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const InputComponent: Components<Omit<Theme, 'components'>>['MuiInput'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      backgroundColor: '#bc5300',
      fontSize: '34px',
    },
  },
};

export default InputComponent;
