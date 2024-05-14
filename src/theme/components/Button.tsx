import { Components, Theme } from '@mui/material/styles';
import pxToRem from 'theme/functions/pxToRem';

declare module '@mui/material/Button' {
  //   interface ButtonPropsVariantOverrides {
  //     dashed: true;
  //   }

  interface ButtonPropsColorOverrides {
    neutral: true;
  }
  interface IconButtonPropsColorOverrides {
    neutral: true;
  }
}

export const ButtonComponent: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.button,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1, 3),
    }),
    sizeLarge: ({ theme }) => ({
      fontSize: pxToRem(16),
      padding: theme.spacing(1.25, 2.75),
      lineHeight: 1.375,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.75, 1.25),
      lineHeight: 1.25,
      fontSize: pxToRem(14),
    }),

    outlinedSizeLarge: {
      paddingTop: `${pxToRem(9)}`,
      paddingBottom: `${pxToRem(9)}`,
    },
    outlinedSizeMedium: ({ theme }) => ({
      fontSize: pxToRem(16),
      padding: theme.spacing(1.25, 3),
    }),
    outlinedSizeSmall: ({ theme }) => ({
      fontSize: pxToRem(14),
      padding: theme.spacing(1, 4),
    }),

    containedSizeSmall: ({ theme }) => ({
      padding: theme.spacing(1, 3),
      fontSize: theme.typography.pxToRem(14),
      lineHeight: 1.25,
    }),
    containedSizeMedium: ({ theme }) => ({
      fontSize: pxToRem(16),
      padding: theme.spacing(1.25, 3),
      lineHeight: 1.5,
    }),
    containedSecondary: ({ theme }) => ({
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      '&:hover': {
        backgroundColor: `${theme.palette.primary.contrastText} !important`,
      },
    }),
    startIcon: {
      '& > *:first-of-type': {
        fontSize: 18,
      },
    },
    endIcon: {
      '& > *:first-of-type': {
        fontSize: 18,
      },
    },
    iconSizeLarge: {
      '& > *:first-of-type': {
        fontSize: 30,
      },
    },
    // outlinedNeutral: ({ theme }) => ({
    //   borderColor: grey[500],
    //   '&:hover': {
    //     backgroundColor: theme.palette.neutral.lighter,
    //   },
    // }),
  },
};
