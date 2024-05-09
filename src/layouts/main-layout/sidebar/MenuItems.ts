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
  external?: boolean;
  level?: number;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

const Menuitems: IMenuitems[] = [
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: HomeIcon,
    href: '/dashboard/default',
  },
  {
    id: uniqueId(),
    title: 'Orders',
    icon: OrderIcon,
    href: '/dashboard/orders',
    chip: '16',
    chipColor: 'secondary',
  },
  {
    id: uniqueId(),
    title: 'Products',
    icon: ProductsIcon,
    href: '/dashboard/products',
  },
  {
    id: uniqueId(),
    title: 'Categories',
    icon: CategoriesIcon,
    href: '/dashboard/categories',
  },
  {
    id: uniqueId(),
    title: 'Customers',
    icon: CustomersIcon,
    href: '/dashboard/customers',
  },
  {
    id: uniqueId(),
    title: 'Reports',
    icon: ReportsIcon,
    href: '/dashboard/reports',
  },
  {
    id: uniqueId(),
    title: 'Coupons',
    icon: CouponsIcon,
    href: '/dashboard/coupons',
  },
  {
    id: uniqueId(),
    title: 'Inbox',
    icon: InboxIcon,
    href: '/dashboard/inbox',
  },
  {
    navlabel: true,
    subheader: 'Other Information',
  },
  {
    id: uniqueId(),
    title: 'Knowledge base',
    icon: KnowledgebaseIcon,
    href: '/knowledge-base',
  },
  {
    id: uniqueId(),
    title: 'Product Updates',
    icon: ProductUpdateIcon,
    href: '/product-updates',
  },

  {
    navlabel: true,
    subheader: 'Settings',
  },
  {
    id: uniqueId(),
    title: 'Personal Settings',
    icon: PersonalSettingsIcon,
    href: '/settings/personal',
  },
  {
    id: uniqueId(),
    title: 'Global Settings',
    icon: GlobalSettingsIcon,
    href: '/settings/global',
  },
  //   {
  //     id: uniqueId(),
  //     title: 'Settings',
  //     icon: HomeIcon,
  //     href: '/settings',
  //     children: [
  //       {
  //         id: uniqueId(),
  //         title: 'Personal Settings',
  //         icon: HomeIcon,
  //         href: '/settings/personal',
  //       },
  //       {
  //         id: uniqueId(),
  //         title: 'Global Settings',
  //         icon: HomeIcon,
  //         href: '/settings/global',
  //       },
  //     ],
  //   },
];

export default Menuitems;
