import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    large: true;
  }
}

// const sizes: {
//   [key: string]: number;
// } = { small: 42, medium: 50, large: 56 };

const TextFieldComponent: Components<Omit<Theme, 'components'>>['MuiTextField'] = {
  defaultProps: {
    variant: 'filled',
    InputLabelProps: { shrink: true },
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...(ownerState.variant === 'filled' && {
        background: '#fff !important',
        borderRadius: theme.shape.borderRadius * 2,
        padding: theme.spacing(1, 1.5),
        '& .MuiInputLabel-filled': {
          position: 'static',
          transform: 'none',
        },
        '& .MuiFilledInput-input': {
          padding: theme.spacing(0, 1),
          fontSize: theme.typography.pxToRem(14),
          height: theme.typography.pxToRem(22),
          width: 'max-content !important',
        },
        '& .MuiFilledInput-root': {
          background: '#fff !important',
          paddingLeft: 0,
          border: 0,
          '&:before, &:after': {
            display: 'none',
          },
        },
        '& .MuiInputAdornment-root': {
          marginTop: `0!important`,
          marginRight: 0,
          padding: theme.spacing(1.2),
        },
        '.MuiInputAdornment-root + .MuiFilledInput-input': {
          paddingLeft: theme.spacing(0),
        },
      }),
      ...(ownerState.size === 'small' && {
        '& .MuiFilledInput-input': {
          padding: theme.spacing(1.5),
          fontSize: theme.typography.pxToRem(14),
          height: theme.typography.pxToRem(14),
        },
      }),
      ...(ownerState.size === 'large' && {
        '& .MuiFilledInput-input': {
          padding: theme.spacing(1.5),
          fontSize: theme.typography.pxToRem(16),
          height: '18px',
        },
      }),
    }),
  },
};

export default TextFieldComponent;
