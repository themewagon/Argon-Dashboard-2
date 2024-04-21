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

  //   interface ButtonClasses {
  //     outlinedNeutral: true;
  //   }

  //   interface ButtonOwnProps {
  //     shape?: 'square' | 'rounded';
  //   }
}

// const shapes = ['rounded', 'square'];
// const sizes: {
//   [key: string]: number;
// } = { small: 30, medium: 36, large: 42 };

// const btnShapeVariants: ComponentsVariants['MuiButton'] = [];

// shapes.forEach((shape) => {
//   Object.keys(sizes).forEach((size) => {
//     btnShapeVariants.push({
//       props: { shape: shape as ButtonProps['shape'], size: size as ButtonProps['size'] },
//       style: {
//         height: sizes[size],
//         minWidth: sizes[size],
//         borderRadius: shape === 'circle' ? '50%' : shape === 'rounded' ? '24px' : undefined,
//       },
//     });
//   });
// });

export const ButtonComponent: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: pxToRem(12),
      fontWeight: 700,
      borderRadius: theme.spacing(1),
      padding: theme.spacing(1, 3),
    }),
    sizeLarge: {
      fontSize: pxToRem(16),
      padding: `${pxToRem(10)} ${pxToRem(22)}`,
      lineHeight: 1.375,
    },
    sizeSmall: {
      padding: `${pxToRem(6)} ${pxToRem(10)}`,
      lineHeight: 1.286,
    },
    outlinedSizeLarge: {
      paddingTop: `${pxToRem(9)}`,
      paddingBottom: `${pxToRem(9)}`,
    },
    outlinedSizeMedium: {
      fontSize: pxToRem(12),
      padding: `${pxToRem(10)} ${pxToRem(24)}`,
    },
    outlinedSizeSmall: {
      fontSize: pxToRem(10),
      paddingTop: `${pxToRem(9)}`,
      paddingBottom: `${pxToRem(9)}`,
    },

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
  defaultProps: {
    // disableElevation: true,
  },
};
