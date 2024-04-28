import { Box, Link, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

// links
const data = [
  { href: '/contact-us', title: 'Creative Team', key: 'team' },
  { href: '/about-us', title: 'About Us', key: 'about' },
  { href: '/blog', title: 'Blog ', key: 'blog' },
  { href: '/license', title: 'License ', key: 'license' },
];
const Footer = () => {
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
      spacing={0}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text.secondary"
        px={1.5}
      >
        <Typography variant="h6" fontWeight={400}>
          &copy; {new Date().getFullYear()}, made with
          <IconifyIcon icon="ri:heart-fill" sx={{ color: 'text.secondary', mb: -0.5, mx: 0.5 }} />
          By
          <Typography component="span" variant="h6" color="text.primary" px={1}>
            Creative Tim
          </Typography>
          for a better web
        </Typography>
      </Stack>
      <Box
        component="ul"
        sx={({ breakpoints }) => ({
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          listStyle: 'none',
          mt: 3,
          mb: 0,
          p: 0,

          [breakpoints.up('lg')]: {
            mt: 0,
          },
        })}
      >
        {data?.map((link) => (
          <Box key={link.key} component="li" px={2} lineHeight={1}>
            <Link href={link.href} target="_blank">
              <Typography variant="button" fontWeight="regular" color="text.secondary">
                {link.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default Footer;
