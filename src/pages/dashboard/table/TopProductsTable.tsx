import { Box, LinearProgress } from '@mui/material';
import { DataGrid, GridApi, GridSlots, useGridApiRef } from '@mui/x-data-grid';
import { escapeRegExp } from '@mui/x-data-grid/internals';
import { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import { topProductsColumns } from './Columns';
import CustomFooter from './CustomFooter';
import CustomNoRows from './CustomNoRows';
import DataGridTitle from './DataGridTitle';
import { TopProductsRowData, topProductsTableData } from './table-data';

const TopProductsTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [originalRows, setOriginalRows] = useState<TopProductsRowData[]>([]);
  const [rows, setRowsState] = useState<TopProductsRowData[]>([]);
  const apiRef = useGridApiRef<GridApi>();

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      const data = topProductsTableData;
      setOriginalRows(data);
      setRowsState(data);
      setIsLoading(false);
      apiRef.current.autosizeColumns({ includeOutliers: true, expand: true });
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [apiRef]);

  const setRows = (newRows: TopProductsRowData[]) => {
    setRowsState(newRows);
    apiRef.current.setRows(newRows);
  };

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = originalRows.filter((row) =>
      Object.values(row).some((fieldValue) =>
        fieldValue && typeof fieldValue === 'object' && 'title' in fieldValue
          ? searchRegex.test(fieldValue.title)
          : searchRegex.test(fieldValue.toString()),
      ),
    );
    console.log(filteredRows);
    setRows(filteredRows);
  };

  return (
    <Box
      sx={({ typography }) => ({
        overflow: 'auto',
        minHeight: 0,
        position: 'relative',
        height: { xs: 'auto', sm: typography.pxToRem(500) },
      })}
    >
      <SimpleBar>
        <DataGrid
          autoHeight={false}
          getRowHeight={() => 52}
          columns={topProductsColumns}
          rows={rows}
          onResize={() => {
            apiRef.current.autosizeColumns({
              includeOutliers: true,
              expand: true,
            });
          }}
          loading={isLoading}
          apiRef={apiRef}
          hideFooterSelectedRowCount
          disableColumnResize
          disableColumnMenu
          disableColumnSelector
          disableRowSelectionOnClick
          rowSelection={false}
          slots={{
            loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
            pagination: CustomFooter,
            toolbar: DataGridTitle,
            noRowsOverlay: CustomNoRows,
          }}
          slotProps={{
            toolbar: {
              title: 'Top Products by Units Sold',
              flag: 'products',
              value: searchText,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                requestSearch(event.target.value),
              clearSearch: () => requestSearch(''),
            },
            pagination: { labelRowsPerPage: rows.length },
          }}
          initialState={{ pagination: { paginationModel: { page: 1, pageSize: 5 } } }}
          pageSizeOptions={[5, 10, 25]}
          sx={({ spacing, palette }) => ({
            boxShadow: 1,
            px: spacing(3),
            borderColor: palette.common.white,
            height: 1,
            width: 1,
          })}
        />
      </SimpleBar>
    </Box>
  );
};

export default TopProductsTable;
