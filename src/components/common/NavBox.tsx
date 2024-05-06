import { Box, BoxProps } from '@mui/material';
import { useBreakpoints } from 'providers/useBreakPoint';
import { PropsWithChildren } from 'react';

type NavBoxProps = PropsWithChildren<BoxProps & React.HTMLAttributes<HTMLDivElement>>;

const CustomNavBox = ({ children, ...rest }: NavBoxProps) => {
  const { up } = useBreakpoints();
  const upMd = up('md');
  return (
    <Box
      {...rest}
      sx={[
        () => ({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 1,
        }),
        upMd && {
          justifyContent: 'stretch !important',
          width: 'max-content !important',
        },
      ]}
    >
      {children}
    </Box>
  );
};

export default CustomNavBox;
