import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const IconButtonComponent: Components<Omit<Theme, 'components'>>['MuiIconButton'] = {
  defaultProps: { size: 'small' },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0),
      '&:hover': {
        backgroundColor: theme.palette.transparent.main,
      },

      '& .MuiTypography-root': {
        display: 'none',

        [theme.breakpoints.up('sm')]: {
          display: 'inline-block',
          lineHeight: 1.2,
          marginLeft: theme.spacing(1),
        },
      },
    }),
  },
};

export default IconButtonComponent;
