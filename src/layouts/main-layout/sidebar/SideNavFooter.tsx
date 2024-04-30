import { Box, Button, Link, Stack, Typography } from '@mui/material';
import icon from 'assets/images/icon-documentation.svg';

const SideNavFooter = () => {
  return (
    <Box position="relative" textAlign="center">
      <Box component="img" src={icon} alt="sidebar_image" sx={{ mt: 1, width: '60%' }} />
      <Box
        sx={{
          width: 1,
          pb: 2,
          px: 2,
          textAlign: 'center',
          lineHeight: 0,
        }}
      >
        <Typography color="inherit" variant="h6">
          Need help?
        </Typography>
        <Typography color="text.secondary" variant="caption">
          Please check our docs
        </Typography>
      </Box>
      <Stack direction="column">
        <Button
          component={Link}
          variant="contained"
          size="small"
          sx={{ mb: 1, mx: 'auto' }}
          href="https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard/"
          target="_blank"
        >
          Documentation
        </Button>
      </Stack>
    </Box>
  );
};

export default SideNavFooter;
