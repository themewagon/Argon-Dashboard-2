import { Box, Divider, Drawer, List, SvgIconProps, Typography } from '@mui/material';
import MenuItemIconBasic from 'components/icons/MenuItemDocsBasic';
import MenuItemIconChangelog from 'components/icons/MenuItemDocsChangelog';
import MenuItemIconComponents from 'components/icons/MenuItemDocsComponents';
import MenuItemIconApp from 'components/icons/MenuItemIconApplications';
import MenuItemIconAuth from 'components/icons/MenuItemIconAuth';
import MenuItemIconDashboard from 'components/icons/MenuItemIconDashboard';
import MenuItemIconAppEcommerce from 'components/icons/MenuItemIconEcommerce';
import MenuItemIconPages from 'components/icons/MenuItemIconPages';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SideNavCollapse from './SideNavCollapse';
import SideNavFooter from './SideNavFooter';
import SideNavItem from './SideNavItem';
import SidenavList from './SideNavList';

type RouteType = 'title' | 'divider' | 'collapse';

interface RouteItem {
  type: RouteType;
  name?: string;
  key: string;
  route?: string;
  title?: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  noCollapse?: boolean;
  collapse?: {
    name: string;
    key: string;
    route: string;
  }[];
}

const routes: RouteItem[] = [
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
interface SideNavProps {
  onDrawerClose: () => void;
  onDrawerTransitionEnd: () => void;
  mobileOpen: boolean;
}
const SideNavSection = ({ onDrawerClose, onDrawerTransitionEnd, mobileOpen }: SideNavProps) => {
  const [openCollapse, setOpenCollapse] = useState<boolean | string>(false);

  const location = useLocation();
  const { pathname } = location;
  const items = pathname.split('/').slice(1);
  //   const itemParentName = items[1];
  const itemName = items[items.length - 1];
  const collapseName = pathname.split('/').slice(1)[0];
  useEffect(() => {
    setOpenCollapse(collapseName);
    // setOpenNestedCollapse(itemParentName);
  }, []);

  //    Function to handle toggling of openCollapse state

  //   Render the all the collpases from the routes.js

  const renderCollapse = (collapses: RouteItem['collapse']) =>
    collapses?.map(({ name, key, route }) => {
      const returnValue = <SideNavItem name={name} route={route} active={key === itemName} />;
      return <SidenavList key={key}>{returnValue}</SidenavList>;
    });

  const renderRoutes = routes.map(
    ({ type, name, icon, title, collapse, noCollapse, key, route }: RouteItem) => {
      let returnValue;

      if (type === 'collapse') {
        if (noCollapse && route) {
          returnValue = (
            <NavLink to={route} key={key}>
              <SideNavCollapse
                name={name}
                icon={icon}
                noCollapse={noCollapse}
                active={key === collapseName}
              >
                {collapse ? renderCollapse(collapse) : null}
              </SideNavCollapse>
            </NavLink>
          );
        } else {
          returnValue = (
            <SideNavCollapse
              key={key}
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
              open={openCollapse === key}
              onClick={() => {
                openCollapse === key ? setOpenCollapse(false) : setOpenCollapse(key);
              }}
            >
              {collapse ? renderCollapse(collapse) : null}
            </SideNavCollapse>
          );
        }
      } else if (type === 'title') {
        returnValue = (
          <Typography
            key={key}
            color={'text.secondary'}
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </Typography>
        );
      } else if (type === 'divider') {
        returnValue = <Divider key={key} />;
      }

      return returnValue;
    },
  );

  return (
    <>
      <Drawer variant="permanent" sx={{ display: { xs: 'none', xl: 'block' } }}>
        <Box pt={3} pb={1} px={4} textAlign="center">
          <Box component={NavLink} to="/" display="flex" alignItems="center">
            <Box component="img" src={'/Argon-Logo.svg'} alt="Argon Logo" width="2rem" mr={0.25} />
            <Box width={'100%'}>
              <Typography component="h6" variant="button" fontWeight="bold">
                Argon Dashboard 2 PRO
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <List>{renderRoutes}</List>

        <Box pt={1} mt="auto" mb={2} mx={2}>
          <SideNavFooter />
        </Box>
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={onDrawerTransitionEnd}
        onClose={onDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{ display: { xs: 'block', xl: 'none' } }}
      >
        <Box pt={3} pb={1} px={4} textAlign="center">
          <Box component={NavLink} to="/" display="flex" alignItems="center">
            <Box component="img" src={'/Argon-Logo.svg'} alt="Argon Logo" width="2rem" mr={0.25} />
            <Box width={'100%'}>
              <Typography component="h6" variant="button" fontWeight="bold">
                Argon Dashboard 2 PRO
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <List>{renderRoutes}</List>

        <Box pt={1} mt="auto" mb={2} mx={2}>
          <SideNavFooter />
        </Box>
      </Drawer>
    </>
  );
};

export default SideNavSection;
