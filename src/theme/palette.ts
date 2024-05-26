import { PaletteColorOptions, PaletteOptions } from '@mui/material';
import { blue, green, grey, orange, purple, red, skyBlue, turquoise, yellow } from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
    white?: PaletteColorOptions;
    dark?: PaletteColorOptions;
    transparent?: PaletteColorOptions;
    black?: PaletteColorOptions;
    gradients?: {
      primary: PaletteColorOptions;
      secondary: PaletteColorOptions;
      info: PaletteColorOptions;
      success: PaletteColorOptions;
      warning: PaletteColorOptions;
      error: PaletteColorOptions;
    };
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    state?: string;
  }
  interface Palette {
    neutral: PaletteColor;
    white: PaletteColor;
    black: PaletteColor;
    dark: PaletteColor;
    transparent: PaletteColor;
    gradients: {
      primary: PaletteColor;
      secondary: PaletteColor;
      info: PaletteColor;
      success: PaletteColor;
      warning: PaletteColor;
      error: PaletteColor;
    };
  }

  interface PaletteColor {
    lighter: string;
    darker: string;
    state: string;
  }
}

const palette: PaletteOptions = {
  action: {
    active: grey[500],
    hover: grey[100],
    selected: grey[100],
    disabled: grey[400],
    disabledBackground: grey[200],
    focus: grey[300],
  },
  background: {
    paper: grey[50],
    default: grey[100],
  },
  text: {
    primary: grey[900],
    secondary: grey[700],
    disabled: grey[300],
  },
  white: {
    main: '#ffffff',
  },
  black: {
    light: '#141414',
    main: '#000000',
  },
  dark: {
    main: '#344767',
  },
  transparent: {
    main: 'transparent',
  },
  neutral: {
    lighter: grey[100],
    light: grey[300],
    main: grey[500],
    dark: grey[900],
    darker: grey[900],
    contrastText: '#ffffff',
  },
  primary: {
    main: blue[800],
    light: blue[200],
    lighter: blue[100],
  },
  secondary: {
    lighter: purple[50],
    light: purple[300],
    main: purple[500],
    dark: purple[700],
    darker: purple[900],
  },
  error: { lighter: red[50], light: red[100], main: red[600], dark: red[700], darker: red[900] },
  warning: {
    lighter: orange[50],
    light: orange[100],
    main: orange[500],
    dark: orange[700],
    darker: orange[900],
    contrastText: '#ffffff',
  },
  success: {
    lighter: green[50],
    light: green[100],
    main: green[600],
    dark: green[700],
    darker: green[900],
  },
  info: {
    lighter: turquoise[50],
    light: turquoise[300],
    main: turquoise[500],
    dark: turquoise[700],
    darker: turquoise[900],
    contrastText: '#ffffff',
  },

  grey: { ...grey },
  gradients: {
    primary: {
      main: blue[800],
      state: purple[500],
    },

    secondary: {
      main: '#627594',
      state: '#a8b8d8',
    },

    info: {
      main: skyBlue[500],
      state: turquoise[500],
    },

    success: {
      main: green[500],
      state: turquoise[400],
    },

    warning: {
      main: orange[500],
      state: yellow[500],
    },

    error: {
      main: red[600],
      state: orange[600],
    },
  },
};

export default palette;
