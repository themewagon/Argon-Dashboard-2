import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const MenuItemComponent: Components<Omit<Theme, 'components'>>['MuiMenuItem'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      minHeight: 0,
    },
  },
};

export default MenuItemComponent;
