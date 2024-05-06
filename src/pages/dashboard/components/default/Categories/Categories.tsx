import { Box, Card, Typography } from '@mui/material';
import categoriesListData from './CategoriesData';
import CategoryListItem from './CategoryListItem';

const Categories = () => {
  return (
    <>
      <Card>
        <Box sx={{ pt: 2, px: 2 }}>
          <Typography variant="body1" textTransform="capitalize">
            Categories
          </Typography>
        </Box>
        <Box p={2}>
          <Box component="ul" display="flex" flexDirection="column" sx={{ p: 0, m: 0 }}>
            {categoriesListData.map((item) => (
              <CategoryListItem key={item.id} item={item} />
            ))}
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Categories;
