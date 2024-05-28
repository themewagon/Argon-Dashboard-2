import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import AvatarImage from 'assets/images/avatar.svg';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState } from 'react';
import { profileOptions } from './menu-data';

const ProfileAction = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={({ spacing }) => ({
        px: spacing(0.75),
      })}
    >
      <ButtonBase
        aria-controls="msgs-menu"
        aria-haspopup="true"
        disableRipple={true}
        onClick={handleClick}
      >
        <Stack
          spacing={1.5}
          direction="row"
          alignItems="center"
          sx={({ spacing }) => ({
            py: spacing(0.75),
            ml: spacing(0.75),
          })}
        >
          <Avatar
            alt="avatar"
            variant="rounded"
            src={AvatarImage}
            sx={({ spacing }) => ({
              height: spacing(4.5),
              width: spacing(4.5),
            })}
          />
          <Typography
            variant="button"
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            X’eriya Ponald
          </Typography>
          <IconifyIcon icon="iconamoon:arrow-down-2-light" width={24} height={24} />
        </Stack>
      </ButtonBase>
      <Menu
        id="long-menu"
        keepMounted
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        slotProps={{
          paper: {
            style: {
              paddingTop: theme.spacing(1),
            },
          },
        }}
      >
        {profileOptions.map((option) => (
          <MenuItem
            key={option.id}
            sx={({ spacing }) => ({
              py: spacing(1),
              px: spacing(1.5),
            })}
            onClick={handleClose}
          >
            <ListItemIcon>
              <IconifyIcon width={18} height={18} icon={option.icon} />
            </ListItemIcon>
            <Typography variant="subtitle1"> {option.title}</Typography>
          </MenuItem>
        ))}
        <Stack direction="row" sx={{ width: 1, justifyContent: 'center' }}>
          <Button
            size="small"
            variant="outlined"
            sx={({ spacing }) => ({
              mt: spacing(1.5),
              width: '80%',
            })}
          >
            Logout
          </Button>
        </Stack>
      </Menu>
    </Box>
  );
};
export default ProfileAction;
