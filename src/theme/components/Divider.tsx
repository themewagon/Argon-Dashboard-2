import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const DividerComponent: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.grey[200],
      //   backgroundImage: `linear-gradient(to right, rgba(52, 71, 103, 0), rgba(52, 71, 103, 0.4), rgba(52, 71, 103, 0)) !important`,
      height: 1,
      margin: theme.spacing(2, 0),
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0,
    }),
  },
};

export default DividerComponent;
