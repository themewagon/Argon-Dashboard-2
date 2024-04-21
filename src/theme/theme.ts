import { createTheme, Shadows } from '@mui/material';
import AppBarComponent from './components/AppBar';
import AvatarComponent from './components/Avatar';
import BreadcrumbsComponent from './components/Breadcrumbs';
import { ButtonComponent } from './components/Button';
import CardComponent from './components/Card';
import CheckboxComponent from './components/Checkbox';
import CssBaseline from './components/CssBaseline';
import DividerComponent from './components/Divider';
import DrawerComponent from './components/Drawer';
import IconButtonComponent from './components/IconButton';
import LinearProgressComponent from './components/LinearProgress';
import LinkComponent from './components/Link';
import ListComponent from './components/list/List';
import ListItemComponent from './components/list/ListItem';
import ListItemButtonComponent from './components/list/ListItemButton';
import ListItemIconComponent from './components/list/ListItemIcon';
import ListItemTextComponent from './components/list/ListItemText';
import PaperComponent from './components/Paper';
import SwitchComponent from './components/Switch';
import TextFieldComponent from './components/TextField';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

declare module '@mui/material/styles/createTypography' {
  interface TypographyOptions {
    fontWeightSemiBold?: number;
  }

  interface Typography {
    fontWeightSemiBold: number;
  }
}
// type PxToRemFunction = (number: number, baseNumber?: number) => string;

// declare module '@mui/material/styles/createTheme' {
//   interface ThemeOptions {
//     functions?: {
//       [functionName: string]: PxToRemFunction;
//     };
//   }
//   interface Theme {
//     functions?: {
//       [functionName: string]: PxToRemFunction;
//     };
//   }
// }

export const theme = createTheme({
  palette,
  typography,
  shadows: [...shadows, ...Array(20).fill('none')] as Shadows,
  components: {
    MuiTextField: TextFieldComponent,
    MuiButton: ButtonComponent,
    MuiIconButton: IconButtonComponent,
    MuiSwitch: SwitchComponent,
    MuiCheckbox: CheckboxComponent,
    MuiPaper: PaperComponent,
    MuiCard: CardComponent,
    MuiAvatar: AvatarComponent,
    MuiDrawer: DrawerComponent,
    MuiLink: LinkComponent,
    MuiLinearProgress: LinearProgressComponent,
    MuiBreadcrumbs: BreadcrumbsComponent,
    MuiDivider: DividerComponent,
    MuiList: ListComponent,
    MuiListItem: ListItemComponent,
    MuiListItemText: ListItemTextComponent,
    MuiListItemButton: ListItemButtonComponent,
    MuiListItemIcon: ListItemIconComponent,
    MuiAppBar: AppBarComponent,
    MuiCssBaseline: CssBaseline,
  },
});
