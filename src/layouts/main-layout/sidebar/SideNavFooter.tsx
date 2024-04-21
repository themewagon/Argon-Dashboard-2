import { Box, Button, Link, Typography } from '@mui/material';
import icon from 'assets/images/icon-documentation.svg';

const SideNavFooter = () => {
  return (
    <Box position="relative" textAlign="center">
      <Box mt={1} component="img" src={icon} alt="sidebar_image" width="60%" />
      <Box width="100%" pb={2} px={2} textAlign="center" lineHeight={0}>
        <Typography color="inherit" variant="h6">
          Need help?
        </Typography>
        <Typography color="text.secondary" variant="caption">
          Please check our docs
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column">
        {/* <Button
          variant="contained"
          component={Link}
          to="https://www.creative-tim.com/learning-lab/react/overview/argon-dashboard/"
          target="_blank"
          rel="noreferrer"
          size="small"
          sx={{ mb: 1, color: '#fff' }}
        >
          Documentation
        </Button> */}
        <Link
          href="https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard/"
          target="_blank"
        >
          <Button
            variant="contained"
            size="small"
            sx={{ mb: 1, bgcolor: 'text.primary', px: '1rem' }}
          >
            Documentation
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default SideNavFooter;
