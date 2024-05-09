import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const BadgeComponent: Components<Omit<Theme, 'components'>>['MuiBadge'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({}),
    badge: ({ theme }) => ({
      minWidth: theme.spacing(2),
      height: theme.spacing(2),
      padding: 0,
      //   transform: 'scale(1) translate(30%, -20%)',
    }),
    anchorOriginTopRightRectangular: {
      transform: 'scale(1) translate(30%, -20%)',
    },
  },
};

export default BadgeComponent;
