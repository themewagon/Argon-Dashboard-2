import { ButtonBase, Link, Stack, Typography } from '@mui/material';
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
      <>
        <Typography variant="h6" fontWeight={400} textAlign="center" px={1.5}>
          &copy; {new Date().getFullYear()}, made with
          <IconifyIcon icon="ri:heart-fill" sx={{ color: 'text.secondary', mb: -0.5, mx: 0.5 }} />
          By
          <Typography component="span" variant="h6" color="text.primary" px={1}>
            Creative Tim
          </Typography>
          for a better web
        </Typography>
      </>
      <Stack
        flexDirection="row"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        component="ul"
        sx={({ breakpoints }) => ({
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
          <ButtonBase
            key={link.key}
            component={Link}
            href={link.href}
            target="_blank"
            sx={{ px: 2, lineHeight: 1 }}
          >
            <Typography variant="button" fontWeight="regular" color="text.secondary">
              {link.title}
            </Typography>
          </ButtonBase>
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
