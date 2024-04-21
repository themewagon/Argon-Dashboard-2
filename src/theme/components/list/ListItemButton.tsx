import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';
import { theme } from 'theme/theme';

const ListItemButtonComponent: Components<Omit<Theme, 'components'>>['MuiListItemButton'] = {
  defaultProps: {
    disableGutters: false,
    disableRipple: true,
  },
  styleOverrides: {
    root: () => ({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
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
