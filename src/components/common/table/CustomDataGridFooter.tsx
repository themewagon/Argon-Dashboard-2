import { Pagination, PaginationItem, Stack, Typography } from '@mui/material';
import {
  gridPageCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  gridRowCountSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
interface CustomFooterProps {
  labelRowsPerPage: number;
}
const CustomDataGridFooter = (props: CustomFooterProps) => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const rowCount = useGridSelector(apiRef, gridRowCountSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);

  // Calculate the range of rows currently being shown
  const startRow = page * pageSize + 1;
  const endRow = Math.min((page + 1) * pageSize, rowCount);
  return (
    <Stack
      width={1}
      spacing={2}
      direction={{ sm: 'row', xs: 'column' }}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Showing {startRow} to {endRow} of {props.labelRowsPerPage} data
      </Typography>
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

export default CustomDataGridFooter;
