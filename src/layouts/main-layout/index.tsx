import { Box, Container, Stack } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import MainNavbar from './MainNavbar';
import Sidebar from './sidebar/Sidbar';

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  console.log(mobileOpen);
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
    <Box sx={{ height: 1, position: 'relative', display: 'flex', minHeight: '100vh', width: 1 }}>
      {/* <SideNavSection
        onDrawerClose={handleDrawerClose}
        onDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
      /> */}
      <Sidebar
        onDrawerClose={handleDrawerClose}
        onDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
      />

      <Stack
        spacing={2}
        sx={({ transitions }) => ({
          display: 'flex',
          flexGrow: 1,
          width: 1,
          justifyContent: 'space-between',
          //   ml: {
          //     xs: 0,
          //     md: typography.pxToRem(308),
          //   },
          transition: transitions.create(['margin-left', 'margin-right'], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        })}
      >
        <MainNavbar onDrawerToggle={handleDrawerToggle} />
        <Container
          sx={{
            maxWidth: '100%!important',
          }}
        >
          <Box sx={{ minHeight: 'calc(100vh - 170px)' }}>
            <Outlet />
          </Box>
        </Container>

        <Footer />
      </Stack>
    </Box>
  );
};

export default MainLayout;
