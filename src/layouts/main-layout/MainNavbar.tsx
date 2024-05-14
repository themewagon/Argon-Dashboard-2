import {
  AppBar,
  Avatar,
  Badge,
  Box,
  ButtonBase,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import AvatarImage from 'assets/images/avatar.svg';
import IconifyIcon from 'components/base/IconifyIcon';
import NotificationIcon from 'components/icons/NotificationIcon';
interface MainNavbarProps {
  onDrawerToggle: () => void;
}

function notificationsLabel(count: number) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

const MainNavbar = ({ onDrawerToggle }: MainNavbarProps) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
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
          variant="outlined"
        />
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <IconButton
            aria-label={notificationsLabel(100)}
            size="large"
            color="inherit"
            sx={({ palette }) => ({
              color: palette.grey['500'],
            })}
          >
            <IconifyIcon icon="mdi:message-text-outline" fontSize="1.5rem" />
          </IconButton>
          <IconButton
            aria-label={notificationsLabel(100)}
            size="large"
            color="inherit"
            // onClick={() => onDrawerToggle()}
            sx={({ palette }) => ({
              color: palette.grey['500'],
              //   ...(a && {
              //     bgcolor: 'primary.main',
              //   }),
            })}
          >
            <Badge color="primary" badgeContent={5}>
              <NotificationIcon />
            </Badge>
          </IconButton>
          <ButtonBase disableRipple={true}>
            <Stack
              spacing={1.5}
              direction="row"
              alignItems="center"
              sx={({ spacing }) => ({
                ml: spacing(3.5),
              })}
            >
              <Avatar
                alt="avatar"
                src={AvatarImage}
                sx={({ spacing }) => ({
                  ml: spacing(3),
                })}
              />
              <Typography variant="button">X’eriya Ponald</Typography>
              <IconifyIcon icon="iconamoon:arrow-down-2-light" width={24} height={24} />
            </Stack>
          </ButtonBase>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
