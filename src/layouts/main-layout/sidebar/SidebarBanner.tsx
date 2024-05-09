import { Box, Button, Stack, Typography } from '@mui/material';
import bg from 'assets/images/illustration.svg';
import Image from 'components/base/Image';
const SidebarBanner = () => {
  return (
    <Stack direction={'row'} alignItems="center" gap={2} sx={{ my: 3, p: 2 }}>
      <Box
        sx={({ palette, spacing }) => ({
          height: spacing(20.5),
          width: 1,
          position: 'relative',
          color: palette.common.white,
        })}
      >
        <Image
          src={bg}
          alt="illustration"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'left',
          }}
        >
          <Stack>
            <Typography variant="h6">Grow Business</Typography>
            <Typography variant="subtitle1">Explore our marketing solutions</Typography>

            <Button
              size="small"
              variant="outlined"
              sx={({ spacing }) => ({
                mt: spacing(1),
                alignSelf: 'flex-start',
              })}
            >
              Read More
            </Button>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default SidebarBanner;
