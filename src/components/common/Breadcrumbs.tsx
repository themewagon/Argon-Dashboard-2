import { Box, Breadcrumbs, SvgIcon, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomBreadcrumbs = ({ route, title }: { route: string[]; title: string }) => {
  const routes = route.slice(0, -1);
  return (
    <Box mr={{ xs: 0, xl: 8 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/">
          <Typography variant="body2">
            <SvgIcon
              viewBox="0 0 14 14"
              sx={{
                height: 14,
                width: 14,
              }}
              fill="none"
            >
              <g clip-path="url(#clip0_3320_350)">
                <path
                  d="M9.15838 2.91667H13.65L10.325 0.116667C10.2084 0.0583333 10.0334 0 9.91672 0H8.05005L9.15838 2.91667Z"
                  fill="white"
                />
                <path
                  d="M9.33333 4.08331V8.16665H4.66667V4.08331H0V13.4166C0 13.7666 0.233333 14 0.583333 14H13.4167C13.7667 14 14 13.7666 14 13.4166V4.08331H9.33333Z"
                  fill="white"
                />
                <path
                  d="M4.84164 2.91667L5.94998 0H4.08331C3.96664 0 3.79164 0.0583333 3.73331 0.116667L0.349976 2.91667H4.84164Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3320_350">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </SvgIcon>
          </Typography>
        </Link>
        {routes.map((el) => (
          <Link to={`/${el}`} key={el}>
            <Typography
              variant="button"
              fontWeight={400}
              textTransform="capitalize"
              color={'white.main'}
            >
              {el}
            </Typography>
          </Link>
        ))}
      </Breadcrumbs>

      <Typography fontWeight="bold" textTransform="capitalize" variant="h6" color={'white'} noWrap>
        {title.replace('-', ' ')}
      </Typography>
    </Box>
  );
};

export default CustomBreadcrumbs;
