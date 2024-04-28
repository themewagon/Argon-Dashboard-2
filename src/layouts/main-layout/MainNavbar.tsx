import {
  AppBar,
  Box,
  IconButton,
  Link,
  SvgIcon,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import CustomBreadcrumbs from 'components/common/Breadcrumbs';
import CustomNavBox from 'components/common/NavBox';
import { useLocation } from 'react-router-dom';

interface MainNavbarProps {
  onDrawerToggle: () => void;
}
const MainNavbar = ({ onDrawerToggle }: MainNavbarProps) => {
  const route = useLocation().pathname.split('/').slice(1);

  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar
        sx={(theme) => ({
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          pt: 0.5,
          pb: 0.5,
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: '0',
            paddingBottom: '0',
          },
        })}
      >
        <CustomNavBox mb={{ xs: 1, md: 0 }}>
          <CustomBreadcrumbs route={route} title={route[route.length - 1]} />
          <Link
            href="/"
            sx={(theme) => ({
              display: 'block !important',
              cursor: 'pointer',

              [theme.breakpoints.up('md')]: {
                display: 'none !important',
              },
            })}
          >
            <Box component="img" src={'/Logo-White.png'} alt="Argon Logo" width="2rem" mr={0.25} />
          </Link>
          <Box
            sx={(theme) => ({
              display: 'none !important',
              cursor: 'pointer',

              [theme.breakpoints.up('xl')]: {
                display: 'inline-block !important',
              },
            })}
          >
            <SvgIcon
              viewBox="0 0 21 16"
              fill="none"
              sx={{
                height: 16,
                width: 21,
              }}
            >
              <path d="M0 3H20.5896" stroke="white" stroke-width="2" />
              <path d="M0 8H20.5896" stroke="white" stroke-width="2" />
              <path d="M0 13H20.5896" stroke="white" stroke-width="2" />
            </SvgIcon>
          </Box>
        </CustomNavBox>
        <CustomNavBox>
          <Box
            pr={2}
            sx={({ breakpoints }) => ({
              display: 'none',

              [breakpoints.up('md')]: {
                display: 'block',
              },
            })}
          >
            <TextField
              variant="filled"
              placeholder="Type here..."
              InputProps={{
                startAdornment: (
                  <IconifyIcon icon="material-symbols:search-rounded" fontSize={16} />
                ),
              }}
            />
          </Box>
          <Box
          // display="flex"
          // justifyContent="space-between"
          // alignItems="center"
          // pr={1.2}
          // sx={({ breakpoints }) => ({
          //   [breakpoints.up('md')]: {
          //     display: 'none',
          //   },
          // })}
          >
            <IconButton
              size="small"
              sx={({ breakpoints }) => ({
                display: 'flex',
                justifyContent: 'space-between',
                color: 'common.white',
                border: 0,
                p: 1,
                alignItems: 'center',
                [breakpoints.up('md')]: {
                  display: 'none',
                },
              })}
            >
              <IconifyIcon icon="ant-design:search-outlined" />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              onClick={onDrawerToggle}
              sx={(theme) => ({
                display: 'inline-block',
                lineHeight: 0,
                cursor: 'pointer',
                [theme.breakpoints.up('xl')]: {
                  display: 'none',
                },
              })}
            >
              <SvgIcon
                viewBox="0 0 21 16"
                fill="none"
                sx={{
                  height: 16,
                  width: 21,
                }}
              >
                <path d="M5.14746 3H20.5897" stroke="white" stroke-width="2" />
                <path d="M0 8H20.5896" stroke="white" />
                <path d="M5.14746 13H20.5897" stroke="white" stroke-width="2" />
              </SvgIcon>
            </IconButton>{' '}
            <IconButton>
              <IconifyIcon
                icon="material-symbols:settings-rounded"
                color="common.white"
                fontSize={16}
              />
            </IconButton>
            <IconButton>
              <IconifyIcon
                aria-controls="notification-menu"
                aria-haspopup="true"
                icon="mdi:bell"
                color="common.white"
                fontSize={16}
              />
            </IconButton>
            <Link href="/authentication/sign-in">
              <IconButton>
                <IconifyIcon icon="mdi:user" color="common.white" fontSize={16} />
                <Typography variant="button" fontWeight="medium" color="common.white">
                  Sign-in
                </Typography>
              </IconButton>
            </Link>
          </Box>
        </CustomNavBox>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
