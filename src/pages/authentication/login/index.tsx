import { Box, Card, Grid, Link, Stack, Typography } from '@mui/material';
import LoginForm from 'components/sections/authentication/LoginForm';

const LoginPage = () => {
  return (
    <Box mx="auto" sx={{ mx: 'auto', px: 1, width: 1, height: '100vh' }}>
      <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
        <Grid item xs={12} sm={9} md={6} lg={4}>
          <Card
            sx={{
              py: { xs: 3, sm: 6 },
              px: { xs: 5, sm: 7.5 },

              bgcolor: 'common.white',
            }}
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
                sx={{
                  typography: {
                    sm: 'h1',
                    xs: 'h3',
                    whiteSpace: 'nowrap',
                  },
                }}
              >
                Sign In
              </Typography>

              <Typography variant="button" color="text.secondary">
                New to Our Product?
                <Typography
                  ml={1}
                  color="primary"
                  component={Link}
                  href="/authentication/sign-up"
                  variant="button"
                >
                  Create an Account
                </Typography>
              </Typography>
            </Stack>
            <LoginForm />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
