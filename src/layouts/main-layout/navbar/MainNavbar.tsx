import { AppBar, Box, IconButton, InputAdornment, Stack, TextField, Toolbar } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import LanguageDropdown from 'layouts/main-layout/navbar/LanguageDropdown';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';

interface MainNavbarProps {
  onDrawerToggle: () => void;
}

const MainNavbar = ({ onDrawerToggle }: MainNavbarProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={onDrawerToggle}
            sx={{
              display: { xs: 'block', lg: 'none' },
            }}
          >
            <IconifyIcon icon="oi:menu" color="primary.main" />
          </IconButton>
          <TextField
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconifyIcon icon="majesticons:search-line" />
                </InputAdornment>
              ),
            }}
            variant="standard"
            sx={{
              display: { xs: 'none', lg: 'block' },
            }}
          />
          <IconifyIcon
            icon="majesticons:search-line"
            fontSize={28}
            color="action.active"
            sx={{
              display: { xs: 'block', lg: 'none' },
            }}
          />
        </Stack>
        <Box flexGrow={1} />
        <Stack spacing={0.5} direction="row" alignItems="center">
          <LanguageDropdown />
          <NotificationDropdown />
          <ProfileDropdown />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
