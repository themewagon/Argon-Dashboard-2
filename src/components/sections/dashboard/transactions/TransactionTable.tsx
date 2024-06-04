import { Box, LinearProgress } from '@mui/material';
import { DataGrid, GridApi, GridSlots, useGridApiRef } from '@mui/x-data-grid';
import { escapeRegExp } from '@mui/x-data-grid/internals';
import { useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';

import CustomDataGridFooter from 'components/common/table/CustomDataGridFooter';
import CustomDataGridTitle from 'components/common/table/CustomDataGridHeader';
import CustomDataGridNoRows from 'components/common/table/CustomDataGridNoRows';
import { transactionColumns } from 'components/sections/dashboard/transactions/TransactionTableColumn';
import { TransactionRowData, transactionTableData } from 'data/dashboard/table';

const TransactionTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [originalRows, setOriginalRows] = useState<TransactionRowData[]>([]);

  const [rows, setRows] = useState<TransactionRowData[]>([]);
  const apiRef = useGridApiRef<GridApi>();

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      const data = transactionTableData;
      setOriginalRows(data);
      setRows(data);
      setIsLoading(false);
      apiRef.current.autosizeColumns({ includeOutliers: true, expand: true });
    }, 500);
    return () => {
      clearInterval(timeoutId);
    };
  }, [apiRef]);

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = originalRows.filter((row) =>
      Object.values(row).some((fieldValue) => searchRegex.test(fieldValue.toString())),
    );
    setRows(filteredRows);
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
          columns={transactionColumns}
          rows={rows}
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
              title: 'Recent Transactions',
              flag: 'user',
              value: searchText,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                requestSearch(event.target.value),
              clearSearch: () => requestSearch(''),
            },
            pagination: { labelRowsPerPage: rows.length },
          }}
          initialState={{ pagination: { paginationModel: { page: 1, pageSize: 5 } } }}
          pageSizeOptions={[5, 10, 25]}
          sx={{
            boxShadow: 1,
            px: 3,
            borderColor: 'active.selected',
            height: 1,
            width: 1,
          }}
        />
      </SimpleBar>
    </Box>
  );
};

export default TransactionTable;
