import { Avatar, Box, Stack, Typography } from '@mui/material';

export interface ProductData {
  image: string;
  title: string;
}
export interface ProductCellProps {
  value: ProductData;
}

const ProductCell = ({ value }: ProductCellProps) => {
  const { image, title } = value;
  return (
    <Stack direction="row" alignItems="center">
      <Box mr={2}>
        <Avatar
          src={image}
          alt={title}
          sx={{
            width: 36,
            height: 36,
          }}
        />
      </Box>
      <Stack>
        <Typography variant="subtitle1" color="text.primary">
          <Typography component="span" style={{ fontWeight: 500 }}>
            {title}
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProductCell;
