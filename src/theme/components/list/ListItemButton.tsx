import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const ListItemButtonComponent: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  defaultProps: {
    disableGutters: false,
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: theme.spacing(1.5, 2),
      marginLeft: pxToRem(18),
      position: 'relative',
      userSelect: 'none',
      '&:hover, &:focus': {
        backgroundColor: theme.palette.transparent.main,
      },
    }),
  },
};

export default ListItemButtonComponent;
