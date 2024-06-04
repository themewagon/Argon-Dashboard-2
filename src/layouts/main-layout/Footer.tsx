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
  //   const { up } = useBreakpoints();
  //   const upLg = up('lg');
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      sx={{
        px: 1.5,
        spacing: 0,
        pb: 2,
      }}
    >
      <>
        <Typography
          variant="h6"
          fontWeight={400}
          textAlign="center"
          sx={{
            px: 1.5,
          }}
        >
          &copy; {new Date().getFullYear()}, made with
          <IconifyIcon
            icon="ri:heart-fill"
            sx={{
              color: 'text.secondary',
              mb: -0.5,
              mx: 0.5,
            }}
          />
          By
          <Typography
            component="span"
            variant="h6"
            color="text.primary"
            sx={{
              px: 1,
            }}
          >
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
        sx={{
          listStyle: 'none',
          mt: { xs: 3, lg: 0 },
          mb: 0,
          p: 0,
        }}
      >
        {data?.map((link) => (
          <ButtonBase
            key={link.key}
            component={Link}
            href={link.href}
            target="_blank"
            sx={{
              px: 2,
              lineHeight: 1,
            }}
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
