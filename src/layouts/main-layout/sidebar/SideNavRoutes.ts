import { SvgIconProps } from '@mui/material';
import MenuItemIconBasic from 'components/icons/MenuItemDocsBasic';
import MenuItemIconChangelog from 'components/icons/MenuItemDocsChangelog';
import MenuItemIconComponents from 'components/icons/MenuItemDocsComponents';
import MenuItemIconApp from 'components/icons/MenuItemIconApplications';
import MenuItemIconAuth from 'components/icons/MenuItemIconAuth';
import MenuItemIconDashboard from 'components/icons/MenuItemIconDashboard';
import MenuItemIconAppEcommerce from 'components/icons/MenuItemIconEcommerce';
import MenuItemIconPages from 'components/icons/MenuItemIconPages';

type RouteType = 'title' | 'divider' | 'collapse';

export interface RouteItem {
  type: RouteType;
  name?: string;
  key: string;
  route?: string;
  title?: string;
  icon?: (props?: SvgIconProps) => JSX.Element;
  noCollapse?: boolean;
  collapse?: {
    name: string;
    key: string;
    route: string;
  }[];
}
export const sideNaveRoutes: RouteItem[] = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: MenuItemIconDashboard,
    collapse: [
      {
        name: 'Landing',
        key: 'landing',
        route: '/dashboard/landing',
      },
      {
        name: 'Default',
        key: 'default',
        route: '/dashboard/default',
      },
      {
        name: 'Automotive',
        key: 'automotive',
        route: '/dashboard/automotive',
      },
      {
        name: 'Smart Home',
        key: 'smart-home',
        route: '/dashboard/smart-home',
      },
      {
        name: 'Virtual Reality',
        key: 'virtual-reality',
        route: '/dashboard/virtual-reality',
      },
      {
        name: 'CRM',
        key: 'CRM',
        route: '/dashboard/CRM',
      },
    ],
  },

  { type: 'title', title: 'Pages', key: 'account-pages' },
  {
    type: 'collapse',
    name: 'Pages',
    key: 'pages',
    icon: MenuItemIconPages,
    noCollapse: true,
  },
  {
    type: 'collapse',
    name: 'Applications',
    key: 'applications',
    icon: MenuItemIconApp,
    noCollapse: true,
  },
  {
    type: 'collapse',
    name: 'Ecommerce',
    key: 'ecommerce',
    icon: MenuItemIconAppEcommerce,
    noCollapse: true,
  },
  {
    type: 'collapse',
    name: 'Authentication',
    key: 'authentication',
    icon: MenuItemIconAuth,
    collapse: [
      {
        name: 'Sign-Up',
        key: 'sign-up',
        route: '/authentication/sign-up',
      },
      {
        name: 'Sign In',
        key: 'sign-in',
        route: '/authentication/sign-in',
      },
    ],
  },
  {
    type: 'divider',
    title: 'Divider',
    key: 'divider',
  },
  {
    type: 'title',
    title: 'Docs',
    key: 'docs',
  },
  {
    type: 'collapse',
    name: 'Basics',
    key: 'basics',
    icon: MenuItemIconBasic,
    noCollapse: true,
  },
  {
    type: 'collapse',
    name: 'Components',
    key: 'components',
    icon: MenuItemIconComponents,
    noCollapse: true,
  },
  {
    type: 'collapse',
    name: 'Changelog',
    key: 'changelog',
    icon: MenuItemIconChangelog,
    noCollapse: true,
  },
];
