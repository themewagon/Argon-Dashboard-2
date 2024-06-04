import { Box, Button, Divider, Link, Stack, TextField, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
const RegisterForm = () => {
  return (
    <Box
      sx={{
        mt: { sm: 5, xs: 2.5 },
      }}
    >
      <Stack spacing={3}>
        <TextField fullWidth variant="outlined" id="mail" type="text" label="Email" />
        <TextField fullWidth variant="outlined" id="password" type="text" label="Password" />
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
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            mb: 1,
          }}
        >
          <Typography variant="subtitle1">By creating account, you agree to our</Typography>
          <Typography color="primary" variant="subtitle1">
            Terms of Service
          </Typography>
        </Stack>
      </Stack>
      <Divider
        sx={{
          my: 3,
        }}
      />
      <Typography textAlign="center" color="text.secondary" variant="subtitle1">
        Or create an account using:
      </Typography>
      <Stack
        spacing={1.5}
        sx={{
          mt: 3,
        }}
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
  );
};

export default RegisterForm;
