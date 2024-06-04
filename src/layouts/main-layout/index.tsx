import { Box, Container, Stack } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import MainNavbar from './MainNavbar';
import Sidebar from './sidebar/Sidbar';

const drawerHeight = 170;

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
      <Sidebar
        onDrawerClose={handleDrawerClose}
        onDrawerTransitionEnd={handleDrawerTransitionEnd}
        mobileOpen={mobileOpen}
      />

      <Stack
        spacing={2}
        sx={{
          display: 'flex',
          flexGrow: 1,
          width: 1,
          justifyContent: 'space-between',
        }}
      >
        <MainNavbar onDrawerToggle={handleDrawerToggle} />
        <Container>
          <Box sx={{ minHeight: `calc(100vh - ${drawerHeight}px)` }}>
            <Outlet />
          </Box>
        </Container>
        <Footer />
      </Stack>
    </Box>
  );
};

export default MainLayout;
