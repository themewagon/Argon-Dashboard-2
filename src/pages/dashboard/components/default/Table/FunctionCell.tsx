import { Stack, Typography } from '@mui/material';

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
    <Stack direction="row" alignItems="center">
      <Stack direction="column">
        <Typography variant="button" fontWeight="medium" color="text.primary">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={400}>
          {designation}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FunctionCell;
