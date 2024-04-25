import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const AvatarComponent: Components<Omit<Theme, 'components'>>['MuiAvatar'] = {
  defaultProps: {
    variant: 'rounded',
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.transparent.main,
      boxShadow: theme.shadows[0],
      width: theme.spacing(6),
      height: theme.spacing(6),
    }),
    rounded: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 3,
    }),
  },
};

export default AvatarComponent;
