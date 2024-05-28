import { Box, Button, Stack, Typography } from '@mui/material';
import GlobalSettingsIcon from 'components/icons/menu-icons/GlobalSettingsIcon';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  children: ReactNode;
}

const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={({ spacing }) => ({
        pt: spacing(1),
      })}
    >
      <Typography variant="h2">{children}</Typography>
      <Box flexGrow={1} />
      <Button
        disabled
        variant="outlined"
        color="secondary"
        startIcon={<GlobalSettingsIcon />}
        size="large"
      >
        Manage
      </Button>
    </Stack>
  );
};

export default PageHeader;
