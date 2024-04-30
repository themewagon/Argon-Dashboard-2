import { Avatar, Box, Stack, Typography } from '@mui/material';

export interface AuthorData {
  image: string;
  name: string;
  email: string;
}
export interface AuthorCellProps {
  value: AuthorData;
}

const AuthorCell = ({ value }: AuthorCellProps) => {
  const { image, name, email } = value;
  return (
    <Stack direction="row" alignItems="center" px={1} py={0.5}>
      <Box mr={2}>
        <Avatar src={image} alt={name} variant="rounded" sx={{ width: 36, height: 36 }} />
      </Box>
      <Stack direction="column">
        <Typography variant="button" fontWeight="medium" color="text.primary">
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={400}>
          {email}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default AuthorCell;
