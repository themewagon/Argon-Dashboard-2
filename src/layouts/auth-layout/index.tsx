import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <Box
      sx={{
        height: 1,
        position: 'relative',
        display: 'flex',
        minHeight: '100vh',
        width: 1,
        bgcolor: 'background.default',
      }}
    >
      <Container
        sx={{
          maxWidth: 1,
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
