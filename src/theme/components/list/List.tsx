import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ListComponent: Components<Omit<Theme, 'components'>>['MuiList'] = {
  defaultProps: {},
  styleOverrides: {
    padding: { paddingTop: 0, paddingBottom: 0 },
  },
};

export default ListComponent;
