import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListItemComponent: Components<Omit<Theme, 'components'>>['MuiListItem'] = {
  defaultProps: {
    disableGutters: true,
  },

  styleOverrides: {
    root: {
      paddingTop: 0,
      paddingBottom: 0,
      cursor: 'pointer',
    },
  },
};

export default ListItemComponent;
