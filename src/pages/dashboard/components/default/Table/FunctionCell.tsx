import { Box, Typography } from '@mui/material';

export interface FunctionRole {
  title: string;
  designation: string;
}

export interface FunctionRoleProps {
  value: FunctionRole;
}
const FunctionCell = ({ value }: FunctionRoleProps) => {
  const { title, designation } = value;

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" flexDirection="column">
        <Typography variant="button" fontWeight="medium" color="text.primary">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={400}>
          {designation}
        </Typography>
      </Box>
    </Box>
  );
};

export default FunctionCell;
