import { createTheme, Shadows } from '@mui/material';
import AppBarComponent from './components/AppBar';
import AvatarComponent from './components/Avatar';
import BadgeComponent from './components/Badge';
import BreadcrumbsComponent from './components/Breadcrumbs';
import { ButtonComponent } from './components/Button';
import CardComponent from './components/Card';
import CheckboxComponent from './components/Checkbox';
import ChipComponent from './components/Chip';
import CssBaseline from './components/CssBaseline';
import DividerComponent from './components/Divider';
import DrawerComponent from './components/Drawer';
import InputComponent from './components/form/Input';
import InputAdornmentComponent from './components/form/InputAdornment';
import InputBaseComponent from './components/form/InputBase';
import InputLabelComponent from './components/form/InputLabel';
import OutlinedInputComponent from './components/form/OutlinedInput';
import TextFieldComponent from './components/form/TextField';
import IconButtonComponent from './components/IconButton';
import LinearProgressComponent from './components/LinearProgress';
import LinkComponent from './components/Link';
import ListComponent from './components/list/List';
import ListItemComponent from './components/list/ListItem';
import ListItemButtonComponent from './components/list/ListItemButton';
import ListItemIconComponent from './components/list/ListItemIcon';
import ListItemTextComponent from './components/list/ListItemText';
import ListSubheaderComponent from './components/list/ListSubheader';
import PaperComponent from './components/Paper';
import SvgIconComponent from './components/SvgIcon';
import SwitchComponent from './components/Switch';
import DataGridComponent from './components/table/DataGrid';
import ToolbarComponent from './components/Toolbar';
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
  shadows: [...shadows] as Shadows,
  components: {
    MuiToolbar: ToolbarComponent,
    MuiInput: InputComponent,
    MuiTextField: TextFieldComponent,
    MuiInputBase: InputBaseComponent,
    MuiInputLabel: InputLabelComponent,
    MuiOutlinedInput: OutlinedInputComponent,
    // MuiFilledInput: FilledInputComponent,
    MuiInputAdornment: InputAdornmentComponent,
    MuiSvgIcon: SvgIconComponent,
    MuiBadge: BadgeComponent,
    MuiChip: ChipComponent,
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
    MuiListSubheader: ListSubheaderComponent,
    MuiAppBar: AppBarComponent,
    MuiDataGrid: DataGridComponent,
    MuiCssBaseline: CssBaseline,
  },
});
