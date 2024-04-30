import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import 'simplebar-react/dist/simplebar.min.css';
import scrollbar from 'theme/styles/scrollbar';
import simplebar from 'theme/styles/simplebar';

const CssBaseline: Components<Omit<Theme, 'components'>>['MuiCssBaseline'] = {
  defaultProps: {},
  styleOverrides: (theme) => ({
    html: {
      scrollBehavior: 'smooth',
    },
    '*, *::before, *::after': {
      margin: 0,
      padding: 0,
    },
    'a, a:link, a:visited': {
      textDecoration: 'none !important',
      //   color: `${theme.palette.text.primary}`,
    },
    'a.link, .link, a.link:link, .link:link, a.link:visited, .link:visited': {
      color: `${theme.palette.dark.main} !important`,
      transition: 'color 150ms ease-in !important',
    },
    'a.link:hover, .link:hover, a.link:focus, .link:focus': {
      color: `${theme.palette.info.main} !important`,
    },
    hr: {
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0,
    },
    body: {
      fontVariantLigatures: 'none',
      ...scrollbar(theme),
    },
    // ...echart(),
    ...simplebar(theme),
  }),
};

export default CssBaseline;
