import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const SignUpPage = () => {
  return (
    <Box
      sx={({ spacing }) => ({
        p: { xs: spacing(1), sm: spacing(3) },
      })}
    >
      <Grid container spacing={0} sx={{ overflowX: 'hidden', placeContent: 'center' }}>
        <Grid item xs={12} sm={12} lg={6} xl={6}>
          <Card
            sx={({ spacing, palette }) => ({
              p: { xs: spacing(3), sm: spacing(6) },
              bgcolor: palette.common.white,
            })}
          >
            <Stack
              spacing={1}
              sx={{
                mb: 1,
                textAlign: 'center',
              }}
            >
              <Typography
                variant="h1"
                sx={{ typography: { sm: 'h1', xs: 'h2', whiteSpace: 'nowrap' } }}
              >
                Create New Account
              </Typography>

              <Typography
                variant="button"
                color="text.secondary"
                sx={{
                  position: '// 20relative',
                  px: 2,
                }}
              >
                Have an account ?{' '}
                <Typography color="primary" component={Link} href="/authentication/login">
                  Sign In
                </Typography>
              </Typography>
            </Stack>
            <Box
              sx={({ spacing }) => ({
                mt: { sm: spacing(5), xs: spacing(2.5) },
              })}
            >
              <Stack spacing={3}>
                <TextField fullWidth variant="outlined" id="mail" type="text" label="Email" />
                <TextField
                  fullWidth
                  variant="outlined"
                  id="password"
                  type="text"
                  label="Password"
                />
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  component={Link}
                  href="#!"
                  //   type="submit"
                >
                  Sign In
                </Button>
                <Stack
                  spacing={0.5}
                  sx={({ spacing }) => ({
                    textAlign: 'center',
                    color: 'text.secondary',
                    mb: spacing(1),
                  })}
                >
                  <Typography variant="subtitle1">By creating account, you agree to our</Typography>
                  <Typography color="primary" variant="subtitle1">
                    Terms of Service
                  </Typography>
                </Stack>
              </Stack>
              <Divider
                sx={({ spacing }) => ({
                  my: spacing(3),
                })}
              />
              <Typography textAlign="center" color="text.secondary" variant="subtitle1">
                Or create an account using:
              </Typography>
              <Stack
                spacing={1.5}
                sx={({ spacing }) => ({
                  mt: spacing(3),
                })}
              >
                <Button
                  startIcon={<IconifyIcon icon="flat-color-icons:google" />}
                  sx={{ typography: { sm: 'button', xs: 'subtitle1', whiteSpace: 'nowrap' } }}
                  variant="outlined"
                >
                  Continue with Google
                </Button>
                <Button
                  startIcon={<IconifyIcon icon="logos:facebook" />}
                  sx={{ typography: { sm: 'button', xs: 'subtitle1', whiteSpace: 'nowrap' } }}
                  variant="outlined"
                >
                  Continue with Facebook
                </Button>
              </Stack>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUpPage;
