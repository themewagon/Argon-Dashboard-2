import { Box, Chip, LinearProgress, Typography } from '@mui/material';
import { DataGrid, GridApi, GridColDef, GridSlots, useGridApiRef } from '@mui/x-data-grid';
import { ChangeEvent, useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';

import CustomDataGridFooter from 'components/common/table/CustomDataGridFooter';
import CustomDataGridHeader from 'components/common/table/CustomDataGridHeader';
import CustomDataGridNoRows from 'components/common/table/CustomDataGridNoRows';

import { TransactionRowData, transactionTableData } from 'data/dashboard/table';
import dayjs from 'dayjs';

export const transactionColumns: GridColDef<TransactionRowData>[] = [
  {
    field: 'name',
    renderCell: (params) => {
      return <Typography sx={{ fontWeight: 500 }}>{params.value}</Typography>;
    },
    headerName: 'Name',
    width: 100,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 100,
    valueFormatter: (params) => dayjs(params).format('DD.MM.YYYY'),
    sortComparator: (v1, v2) => dayjs(v1).unix() - dayjs(v2).unix(),
  },
  { field: 'amount', headerName: 'Amount', width: 100 },
  {
    field: 'status',
    renderCell: (params) => {
      let color: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' =
        'default';

      switch (params.value) {
        case 'paid':
          color = 'success';
          break;
        case 'pending':
          color = 'default';
          break;
        default:
          break;
      }

      return <Chip label={params.value} color={color} />;
    },
    headerName: 'Status',
    width: 100,
  },
];

const TransactionTable = () => {
  const [searchText, setSearchText] = useState('');
  const apiRef = useGridApiRef<GridApi>();

  //   useEffect(() => {
  //     const searchRegex = new RegExp(escapeRegExp(searchText), 'i');
  //     const filteredRows = transactionTableData.filter((row) =>
  //       Object.values(row).some((fieldValue) => searchRegex.test(fieldValue.toString()))
  //     );
  //     apiRef.current.setRows(filteredRows);
  //   }, [searchText, apiRef]);

  useEffect(() => {
    apiRef.current.setRows(transactionTableData);
  }, [apiRef]);

  useEffect(() => {
    apiRef.current.setQuickFilterValues([searchText]);
  }, [searchText, apiRef]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.currentTarget.value;
    setSearchText(searchValue);
    if (searchValue === '') {
      apiRef.current.setRows(transactionTableData);
    }
  };

  return (
    <Box
      sx={{
        overflow: 'auto',
        minHeight: 0,
        position: 'relative',
        height: { xs: 'auto', sm: 500 },
        width: 1,
      }}
    >
      <SimpleBar style={{ height: '500px' }}>
        <DataGrid
          autoHeight={false}
          rowHeight={52}
          columns={transactionColumns}
          loading={false}
          apiRef={apiRef}
          onResize={() => {
            apiRef.current.autosizeColumns({
              includeOutliers: true,
              expand: true,
            });
          }}
          hideFooterSelectedRowCount
          disableColumnResize
          disableColumnMenu
          disableColumnSelector
          disableRowSelectionOnClick
          rowSelection={false}
          slots={{
            loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
            pagination: CustomDataGridFooter,
            toolbar: CustomDataGridHeader,
            noResultsOverlay: CustomDataGridNoRows,
          }}
          slotProps={{
            toolbar: {
              title: 'Recent Transactions',
              flag: 'user',
              value: searchText,
              onChange: handleChange,
              clearSearch: () => setSearchText(''),
            },
            pagination: { labelRowsPerPage: transactionTableData.length },
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
