import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const OutlinedInputComponent: Components<Omit<Theme, 'components'>>['MuiOutlinedInput'] = {
  defaultProps: {
    notched: false,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      color: theme.palette.grey['800'],
      fontSize: theme.typography.pxToRem(14),
      fontWeight: theme.typography.fontWeightRegular,
      lineHeight: 20,

      //   '& .MuiOutlinedInput-notchedOutline': {
      //     borderColor: 'green',
      //   },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.lighter,
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: `${theme.palette[ownerState.color!]?.main}` || theme.palette.primary.main,
        },
      },
      //   '&.Mui-focused fieldset': {
      //     border: 1,

      //     borderColor: 'primary.lighter',
      //   },
    }),
    input: ({ theme }) => ({
      height: pxToRem(22),
      paddingTop: theme.spacing(1.5),
      paddingRight: 1,
      paddingBottom: theme.spacing(1.5),
    }),
    notchedOutline: ({ theme }) => ({
      //   borderColor: 'transparent !important',
      borderColor: theme.palette.primary.lighter,
    }),
    colorSecondary: ({ theme }) => ({
      '& fieldset': {
        border: 1,
        borderStyle: 'solid',
        borderColor: `${theme.palette.secondary.main}`,
      },
    }),
  },
};

export default OutlinedInputComponent;
