import { Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
interface CustomFooterProps {
  labelRowsPerPage: number;
}
const CustomFooter = (props: CustomFooterProps) => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  return (
    <Stack width={1} spacing={2} direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="body2">Showing 1 to 5 of {props.labelRowsPerPage} data</Typography>
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
                <Typography fontWeight={400} variant="caption" textAlign="center">
                  Previous
                </Typography>
              ),
              next: () => (
                <Typography fontWeight={400} variant="caption" sx={{ pr: 0 }}>
                  Next
                </Typography>
              ),
            }}
          />
        )}
      />{' '}
    </Stack>
  );
};

export default CustomFooter;
