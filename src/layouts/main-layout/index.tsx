import { Box } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
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
    <Box sx={{ height: 1, position: 'relative', overflow: 'hidden' }}>
      <SideNavSection
        onDrawerClose={handleDrawerClose}
        onDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
      />
      <Box
        sx={({ breakpoints, transitions, typography }) => ({
          p: 3,
          [breakpoints.up('md')]: {
            marginLeft: typography.pxToRem(308),
            transition: transitions.create(['margin-left', 'margin-right'], {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.standard,
            }),
          },
        })}
      >
        <Box
          sx={({ palette, typography }) => ({
            bgcolor: palette.primary.main,
            height: typography.pxToRem(300),
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          })}
        ></Box>
        <MainNavbar onDrawerToggle={handleDrawerToggle} />
        {children}
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
