import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const FilledInputComponent: Components<Omit<Theme, 'components'>>['MuiFilledInput'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius,
      '& fieldset': {
        border: 'none',
      },
      '&:before, &:after': {
        display: 'none',
      },
      backgroundColor: theme.palette.grey['100'],
      '&:hover': {
        backgroundColor: theme.palette.grey['200'],
      },
    }),
    input: {
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
    },
    inputSizeSmall: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(14),
      paddingTop: theme.spacing(0.75),
      paddingBottom: theme.spacing(0.75),

      //   height: theme.typography.pxToRem(24),
    }),
    adornedStart: ({ theme }) => ({
      color: theme.palette.text.secondary,
    }),
  },
};

export default FilledInputComponent;
