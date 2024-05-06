import { Box, ButtonBase, Divider, Drawer, Link, List, Stack, Typography } from '@mui/material';

import Image from 'components/base/Image';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import SideNavCollapse from './SideNavCollapse';
import SideNavFooter from './SideNavFooter';
import SideNavItem from './SideNavItem';
import SidenavList from './SideNavList';
import { RouteItem, sideNaveRoutes } from './SideNavRoutes';

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
  const itemName = items[items.length - 1];
  const collapseName = pathname.split('/').slice(1)[0];
  useEffect(() => {
    setOpenCollapse(collapseName);
  }, []);

  //    Function to handle toggling of openCollapse state

  const renderCollapse = (collapses: RouteItem['collapse']) =>
    collapses?.map(({ name, key, route }) => {
      const returnValue = <SideNavItem name={name} route={route} active={key === itemName} />;
      return <SidenavList key={key}>{returnValue}</SidenavList>;
    });

  const renderRoutes = sideNaveRoutes.map(
    ({ type, name, icon, title, collapse, noCollapse, key, route }: RouteItem) => {
      let returnValue;

      if (type === 'collapse') {
        if (noCollapse && route) {
          returnValue = (
            <Link href={route} key={key}>
              <SideNavCollapse
                name={name}
                icon={icon}
                noCollapse={noCollapse}
                active={key === collapseName}
              >
                {collapse ? renderCollapse(collapse) : null}
              </SideNavCollapse>
            </Link>
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
      <Drawer variant="permanent" sx={{ display: { xs: 'none', md: 'block' } }}>
        <SimpleBar autoHide={true} style={{ maxHeight: `calc(100vh - 32px)` }}>
          <Box pt={3} pb={1} px={4} textAlign="center">
            <ButtonBase component={Link} href="/">
              <Stack alignItems="center" flexDirection="row" gap={1}>
                <Image src={'/Argon-Logo.svg'} alt="Argon Logo" width="2rem" mr={0.25} />
                <Box width={1}>
                  <Typography variant="button" fontWeight="bold">
                    Argon Dashboard 2 PRO
                  </Typography>
                </Box>
              </Stack>
            </ButtonBase>
          </Box>
          <Divider />
          <List>{renderRoutes}</List>

          <Box pt={1} mt="auto" mb={2} mx={2}>
            <SideNavFooter />
          </Box>
        </SimpleBar>
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={onDrawerTransitionEnd}
        onClose={onDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box pt={3} pb={1} px={4} textAlign="center">
          <ButtonBase component={Link} href="/">
            <Stack alignItems="center" flexDirection="row" gap={1}>
              <Image src={'/Argon-Logo.svg'} alt="Argon Logo" width="2rem" mr={0.25} />
              <Box width={1}>
                <Typography variant="button" fontWeight="bold">
                  Argon Dashboard 2 PRO
                </Typography>
              </Box>
            </Stack>
          </ButtonBase>
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
