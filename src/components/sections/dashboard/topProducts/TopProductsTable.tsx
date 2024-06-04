import { Box, LinearProgress } from '@mui/material';
import { DataGrid, GridApi, GridSlots, useGridApiRef } from '@mui/x-data-grid';
import CustomDataGridFooter from 'components/common/table/CustomDataGridFooter';
import CustomDataGridTitle from 'components/common/table/CustomDataGridHeader';
import CustomDataGridNoRows from 'components/common/table/CustomDataGridNoRows';
import { topProductsColumns } from 'components/sections/dashboard/topProducts/TopProductsTableColumn';
import { TopProductsRowData, topProductsTableData } from 'data/dashboard/table';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import SimpleBar from 'simplebar-react';

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

  //   useEffect(() => {
  //     apiRef.current.setQuickFilterValues([searchText]);
  //   }, [searchText, apiRef]);

  const requestSearch = useMemo(() => {
    return (searchValue: string) => {
      const filteredRows = originalRows.filter((row) =>
        Object.values(row).some((fieldValue) => {
          if (typeof fieldValue === 'object' && fieldValue !== null && 'title' in fieldValue) {
            return fieldValue.title.toLowerCase().includes(searchValue.toLowerCase());
          } else {
            return fieldValue.toString().toLowerCase().includes(searchValue.toLowerCase());
          }
        }),
      );
      setRowsState(filteredRows);
    };
  }, [apiRef, originalRows]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setSearchText(searchValue);
    requestSearch(searchValue);
  };

  return (
    <Box
      sx={{
        overflow: 'auto',
        minHeight: 0,
        position: 'relative',
        height: { xs: 'auto', sm: 500 },
      }}
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
            pagination: CustomDataGridFooter,
            toolbar: CustomDataGridTitle,
            noRowsOverlay: CustomDataGridNoRows,
          }}
          slotProps={{
            toolbar: {
              title: 'Top Products by Units Sold',
              flag: 'products',
              value: searchText,
              onChange: handleChange,
              clearSearch: () => {
                setSearchText('');
                setRowsState(originalRows);
              },
            },
            pagination: { labelRowsPerPage: rows.length },
          }}
          initialState={{ pagination: { paginationModel: { page: 1, pageSize: 5 } } }}
          pageSizeOptions={[5, 10, 25]}
          sx={{
            boxShadow: 1,
            px: 3,
            borderColor: 'common.white',
            height: 1,
            width: 1,
          }}
        />
      </SimpleBar>
    </Box>
  );
};

export default TopProductsTable;
