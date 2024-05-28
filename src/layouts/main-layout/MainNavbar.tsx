import { AppBar, Box, IconButton, InputAdornment, Stack, TextField, Toolbar } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import MessageAction from './navbar/MessageAction';
import NotificationAction from './navbar/NotificationAction';
import ProfileAction from './navbar/ProfileAction';
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
          />
        </Stack>
        <Box flexGrow={1} />
        <Stack spacing={0.5} direction="row" alignItems="center">
          <MessageAction />
          <NotificationAction />
          <ProfileAction />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
