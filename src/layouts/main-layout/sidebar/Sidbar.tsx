import { Box, Drawer } from '@mui/material';
import { useBreakpoints } from 'providers/useBreakPoint';
import SimpleBar from 'simplebar-react';
import SidebarBanner from './SidebarBanner';
import SidebarItems from './SidebarItems';
import SidebarLogo from './SidebarLogo';
interface SideNavProps {
  onDrawerClose: () => void;
  onDrawerTransitionEnd: () => void;
  mobileOpen: boolean;
}
const Sidebar = ({ onDrawerClose, onDrawerTransitionEnd, mobileOpen }: SideNavProps) => {
  const { up } = useBreakpoints();
  const upLg = up('lg');

  if (upLg) {
    return (
      <Box
        sx={{
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open
          // onMouseEnter={onHoverEnter}
          // onMouseLeave={onHoverLeave}
          variant="permanent"
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
            },
          }}
        >
          <Box
            sx={{
              height: 1,
            }}
          >
            <Box
              sx={({ palette, shadows }) => ({
                bgcolor: palette.common.white,
                px: 3,
                boxShadow: shadows[9],
              })}
            >
              <SidebarLogo />
            </Box>

            <SimpleBar style={{ height: 'calc(100% - 70px)' }}>
              <Box
                sx={({ palette }) => ({
                  borderRight: 1,
                  borderColor: palette.grey['300'],
                  height: 'calc(100vh + 68px)',
                })}
              >
                <SidebarItems />
                <SidebarBanner />
              </Box>
            </SimpleBar>
            {/* <SidebarItems /> */}
          </Box>
        </Drawer>
      </Box>
    );
  }
  {
    /* Sidebar For Mobile */
  }

  return (
    <Drawer
      anchor="left"
      onTransitionEnd={onDrawerTransitionEnd}
      open={mobileOpen}
      onClose={onDrawerClose}
      variant="temporary"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      PaperProps={{
        sx: {
          backgroundColor: 'common.white',
          border: '0 !important',
          boxShadow: (theme) => theme.shadows[2],
        },
      }}
    >
      {/* ------------------------------------------- */}
      <Box
        sx={({ palette }) => ({
          bgcolor: palette.common.white,
          px: 3,
        })}
      >
        <SidebarLogo />
      </Box>

      {/* ------------------------------------------- */}
      <SimpleBar style={{ height: 'calc(100% - 310px)', maxHeight: '100%' }}>
        <SidebarItems />
      </SimpleBar>
      <SidebarBanner />
    </Drawer>
  );
};

export default Sidebar;
