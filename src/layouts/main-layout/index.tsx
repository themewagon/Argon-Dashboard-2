import { Box } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import pxToRem from 'theme/functions/pxToRem';
import Footer from './Footer';
import MainNavbar from './MainNavbar';
import SideNavSection from './sidebar/SideNav';

const MainLayout = ({ children }: PropsWithChildren) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box position="relative" overflow="hidden" sx={{ height: '100%' }}>
      <SideNavSection
        onDrawerClose={handleDrawerClose}
        onDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
      />
      <Box
        sx={({ breakpoints, transitions }) => ({
          p: 3,
          [breakpoints.up('xl')]: {
            marginLeft: pxToRem(308),
            transition: transitions.create(['margin-left', 'margin-right'], {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.standard,
            }),
          },
        })}
      >
        <Box
          bgcolor="primary.main"
          height="300px"
          width="100vw"
          position="absolute"
          top={0}
          left={0}
        ></Box>
        <MainNavbar onDrawerToggle={handleDrawerToggle} />
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
