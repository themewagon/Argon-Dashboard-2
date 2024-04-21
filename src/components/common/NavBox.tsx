import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from 'react';

type NavBoxProps = PropsWithChildren<BoxProps & React.HTMLAttributes<HTMLDivElement>>;

const CustomNavBox = ({ children, ...rest }: NavBoxProps) => {
  return (
    <Box
      {...rest}
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',

        // [theme.breakpoints.up('md')]: {
        //   justifyContent: 'space-between',
        //   width: '100%',
        // },

        [theme.breakpoints.up('md')]: {
          justifyContent: 'stretch !important',
          width: 'max-content !important',
        },
      })}
    >
      {children}
    </Box>
  );
};

export default CustomNavBox;
