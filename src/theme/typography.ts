import { TypographyOptions } from '@mui/material/styles/createTypography';
import pxToRem from './functions/pxToRem';

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fontWeightLighter?: number;
  }
  interface TypographyOptions {
    fontWeightExtraBold?: number;
  }

  interface Typography {
    fontWeightExtraBold: number;
  }
}

const typography: TypographyOptions = {
  fontFamily: ['Open Sans', 'sans-serif'].join(','),
  //   fontSize: 14,
  fontWeightLighter: 100,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  h1: {
    fontSize: pxToRem(48),
    lineHeight: 1.25,
    fontWeight: 700,
  },

  h2: {
    fontSize: pxToRem(36),
    lineHeight: 1.3,
    fontWeight: 700,
  },

  h3: {
    fontSize: pxToRem(30),
    lineHeight: 1.375,
    fontWeight: 700,
  },

  h4: {
    fontSize: pxToRem(24),
    lineHeight: 1.5,
    fontWeight: 700,
  },

  h5: {
    fontSize: pxToRem(22),
    lineHeight: 1.5,
    fontWeight: 700,
  },

  h6: {
    fontSize: pxToRem(16),
    lineHeight: 1.5,
    fontWeight: 700,
  },

  subtitle1: {
    fontSize: pxToRem(14),
    lineHeight: 1.25,
  },

  subtitle2: {
    fontSize: pxToRem(16),
    fontWeight: 700,
    lineHeight: 1.6,
  },
  caption: {
    fontWeight: 700,
    fontSize: pxToRem(12),
  },

  body1: {
    fontSize: pxToRem(14),
    fontWeight: 400,
    lineHeight: 1.5,
  },

  body2: {
    fontSize: pxToRem(12),
    letterSpacing: '0rem',
    fontWeight: 400,
    lineHeight: 1.333,
  },

  button: {
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: 1.5,
    textTransform: 'none',
  },
};

export default typography;
