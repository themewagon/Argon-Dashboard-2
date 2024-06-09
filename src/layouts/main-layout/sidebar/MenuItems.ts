/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvgIconProps } from '@mui/material';
import CategoriesIcon from 'components/icons/menu-icons/CategoriesIcon';
import CouponsIcon from 'components/icons/menu-icons/CouponsIcon';
import CustomersIcon from 'components/icons/menu-icons/CustomersIcon';
import GlobalSettingsIcon from 'components/icons/menu-icons/GlobalSettingsIcon';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';
import InboxIcon from 'components/icons/menu-icons/InboxIcon';
import KnowledgebaseIcon from 'components/icons/menu-icons/KnowledgebaseIcon';
import OrderIcon from 'components/icons/menu-icons/OrderIcon';
import PersonalSettingsIcon from 'components/icons/menu-icons/PersonalSettingsIcon';
import ProductsIcon from 'components/icons/menu-icons/ProductsIcon';
import ProductUpdateIcon from 'components/icons/menu-icons/ProductUpdateIcon';
import ReportsIcon from 'components/icons/menu-icons/ReportsIcon';
import { uniqueId } from 'lodash';

export interface IMenuitems {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  href?: string;
  children?: IMenuitems[];
  chip?: string;
  chipColor?: string | any;
  variant?: string | any;
  available?: boolean;
  level?: number;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

const Menuitems: IMenuitems[] = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: HomeIcon,
    href: '/',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Orders',
    icon: OrderIcon,
    href: '#!',
    chip: '16',
    chipColor: 'secondary',
    available: false,
  },
  {
    id: uniqueId(),
    title: 'Products',
    icon: ProductsIcon,
    href: '#!',
    available: false,
  },
  {
    id: uniqueId(),
    title: 'Categories',
    icon: CategoriesIcon,
    href: '#!',
    available: false,
  },
  {
    id: uniqueId(),
    title: 'Customers',
    icon: CustomersIcon,
    href: '#!',
    available: false,
  },
  {
    id: uniqueId(),
    title: 'Reports',
    icon: ReportsIcon,
    href: '#!',
    available: false,
  },
  {
    id: uniqueId(),
    title: 'Coupons',
    icon: CouponsIcon,
    href: '#!',
    available: false,
  },
  {
    id: uniqueId(),
    title: 'Inbox',
    icon: InboxIcon,
    href: '#!',
    available: false,
  },
  {
    navlabel: true,
    subheader: 'Authentication',
  },
  {
    id: uniqueId(),
    title: 'Sign Up',
    icon: KnowledgebaseIcon,
    href: '/authentication/sign-up',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Sign In',
    icon: ProductUpdateIcon,
    href: '/authentication/login',
    available: true,
  },

  {
    navlabel: true,
    subheader: 'Settings',
  },
  {
    id: uniqueId(),
    title: 'Personal Settings',
    icon: PersonalSettingsIcon,
    href: '/settings/#!',
    available: false,
  },
  {
    id: uniqueId(),
    title: 'Global Settings',
    icon: GlobalSettingsIcon,
    href: '/settings/#!',
    available: false,
  },
];

export default Menuitems;
