import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInputComponent: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      borderRadius: 8,
      '& fieldset': {
        border: 'none',
      },
      '&:before, &:after': {
        display: 'none',
      },
    },
    input: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
    },
    adornedStart: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
  },
};

export default FilledInputComponent;
