import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        minHeight: '100vh',

        bgcolor: 'background.default',
        placeItems: 'center',
      }}
    >
      <Container
        sx={{
          maxWidth: 1,
          height: 1,

          width: 1,
        }}
      >
        <Box>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
};

export default AuthLayout;
