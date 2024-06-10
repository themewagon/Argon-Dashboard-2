import {
  AppBar,
  Box,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Toolbar,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import Logo from 'components/icons/brand/Logo';
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
        <Stack direction="row" spacing={{ xs: 1, sm: 2 }} alignItems="center">
          <Link
            href="/"
            sx={{
              overflow: 'hidden',
              display: { xs: 'flex', lg: 'none' },
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Logo fontSize={'small'} />
          </Link>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={onDrawerToggle}
            sx={{
              display: { xs: 'block', lg: 'none' },
            }}
          >
            <IconifyIcon icon="oi:menu" color="primary.main" sx={{ fontSize: 18, mt: 0.5 }} />
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
            fontSize={24}
            color="primary.main"
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
