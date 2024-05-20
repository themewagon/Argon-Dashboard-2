import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const MenuListComponent: Components<Omit<Theme, 'components'>>['MuiMenuList'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      flex: 1,
      border: '1px solid red',
    },
  },
};

export default MenuListComponent;
