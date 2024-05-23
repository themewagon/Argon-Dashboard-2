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
      sx={({ spacing }) => ({
        pt: spacing(1),
      })}
    >
      <Typography variant="h2">{children}</Typography>
      <Box flexGrow={1} />
      <Button
        variant="contained"
        color="secondary"
        sx={{ gap: 0.5 }}
        startIcon={<GlobalSettingsIcon />}
      >
        Manage
      </Button>
    </Stack>
  );
};

export default PageHeader;
