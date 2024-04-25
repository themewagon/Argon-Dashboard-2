import { Pagination, PaginationItem, Typography } from '@mui/material';
import {
  GridFooterContainer,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

const CustomFooter = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <GridFooterContainer>
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{
              previous: () => (
                <Typography fontWeight={400} variant="caption">
                  Previous
                </Typography>
              ),
              next: () => (
                <Typography fontWeight={400} variant="caption" pr={2}>
                  Next
                </Typography>
              ),
            }}
          />
        )}
      />
    </GridFooterContainer>
  );
};

export default CustomFooter;
