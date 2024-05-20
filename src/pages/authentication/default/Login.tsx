import { Box, Button, Divider, Grid, Link, Stack, TextField, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Box
      sx={({ spacing, palette }) => ({
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      })}
    >
      <Grid container spacing={0} sx={{ overflowX: 'hidden', placeContent: 'center' }}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          xl={6}
          sx={({ spacing, palette }) => ({
            p: spacing(6),
            bgcolor: palette.common.white,
          })}
        >
          <Box
            sx={{
              mb: 1,
            }}
          >
            <Box
              sx={{
                mb: 1,
                mt: 3,
                textAlign: 'center',
              }}
            >
              <Typography
                fontWeight="700"
                variant="h3"
                sx={{
                  mb: 1,
                }}
              >
                Create New Account
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  position: 'relative',
                  px: 2,
                }}
              >
                Have an account ? <Link href="/">Sign In</Link>
              </Typography>
            </Box>
            <Stack>
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
                  type="submit"
                >
                  Sign In
                </Button>
              </Stack>
              <Divider />
              {/* <Box>
                <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
                <CustomTextField id="password" type="password" variant="outlined" fullWidth />
              </Box>
              <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                <FormGroup>
                  <FormControlLabel
                    control={<CustomCheckbox defaultChecked />}
                    label="Remeber this Device"
                  />
                </FormGroup>
                <Typography
                  component={Link}
                  to="/auth/forgot-password"
                  fontWeight="500"
                  sx={{
                    textDecoration: 'none',
                    color: 'primary.main',
                  }}
                >
                  Forgot Password ?
                </Typography>
              </Stack> */}
            </Stack>
            {/* <AuthLogin
              title="Welcome to Modernize"
              subtext={
                <Typography variant="subtitle1" color="textSecondary" mb={1}>
                  Your Admin Dashboard
                </Typography>
              }
              subtitle={
                <Stack direction="row" spacing={1} mt={3}>
                  <Typography color="textSecondary" variant="h6" fontWeight="500">
                    New to Modernize?
                  </Typography>
                  <Typography
                    component={Link}
                    to="/auth/register"
                    fontWeight="500"
                    sx={{
                      textDecoration: 'none',
                      color: 'primary.main',
                    }}
                  >
                    Create an account
                  </Typography>
                </Stack>
              }
            /> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
