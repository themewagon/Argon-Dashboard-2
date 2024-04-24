import {
  GridFooter,
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
    // <GridFooterContainer>
    //   <Pagination
    //     color="primary"
    //     count={pageCount}
    //     page={page + 1}
    //     onChange={(event, value) => apiRef.current.setPage(value - 1)}
    //   />
    //   <GridPagination />
    // </GridFooterContainer>
    <GridFooterContainer>
      {/* Add what you want here */}
      <GridFooter
        sx={{
          border: 'none', // To delete double border.
        }}
      />
    </GridFooterContainer>
  );
};

export default CustomFooter;
