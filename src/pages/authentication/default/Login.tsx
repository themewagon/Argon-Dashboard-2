import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const LoginPage = () => {
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
                Sign In
              </Typography>

              <Typography
                variant="button"
                color="text.secondary"
                sx={{
                  position: 'relative',
                  px: 2,
                }}
              >
                New to Our Product?
                <Typography ml={1} color="primary" component={Link} href="/authentication/sign-up">
                  Create an Account
                </Typography>
              </Typography>
            </Stack>
            <Box
              sx={({ spacing }) => ({
                mt: spacing(5),
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
                <FormGroup sx={{ mt: 0 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Keep me signed in"
                    sx={({ palette }) => ({
                      color: palette.text.secondary,
                    })}
                  />
                </FormGroup>
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
                  <Typography color="primary" variant="subtitle1">
                    Forgot Your Password?{' '}
                  </Typography>
                </Stack>
              </Stack>
              <Divider
                sx={({ spacing }) => ({
                  my: spacing(3),
                })}
              />
              <Typography textAlign="center" color="text.secondary" variant="subtitle1">
                Or sign in using:
              </Typography>
              <Stack
                spacing={1.5}
                sx={({ spacing }) => ({
                  mt: spacing(3),
                })}
              >
                <Button
                  startIcon={<IconifyIcon icon="flat-color-icons:google" />}
                  variant="outlined"
                  sx={{ typography: { sm: 'button', xs: 'subtitle1', whiteSpace: 'nowrap' } }}
                >
                  Continue with Google
                </Button>
                <Button
                  startIcon={<IconifyIcon icon="logos:facebook" />}
                  variant="outlined"
                  sx={{ typography: { sm: 'button', xs: 'subtitle1', whiteSpace: 'nowrap' } }}
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

export default LoginPage;
