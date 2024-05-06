import { Chip, LinearProgress, Stack } from '@mui/material';
import {
  DataGrid,
  GridApi,
  GridColDef,
  GridRenderCellParams,
  GridSlots,
  useGridApiRef,
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import AuthorCell, { AuthorData } from './AuthorCell';
import CustomFooter from './CustomFooter';
import { userTableData } from './Data';
import FunctionCell, { FunctionRole } from './FunctionCell';

export interface RowData {
  id: number;
  author: AuthorData;
  function: FunctionRole;
  status: boolean;
  employed: string;
  action: string;
}

const UserTable = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rows, setRows] = useState<RowData[]>([]);
  const apiRef = useGridApiRef<GridApi>();

  const columns: GridColDef<RowData>[] = [
    {
      field: 'author',
      headerName: 'Author',
      minWidth: 300,
      valueGetter: (params: AuthorData) => params.name,
      renderCell: (params: GridRenderCellParams<RowData>) => (
        <AuthorCell value={params?.row?.author} />
      ),
    },
    {
      field: 'function',
      headerName: 'Function',
      flex: 1,
      minWidth: 150,
      align: 'left',
      valueGetter: (params: FunctionRole) => params.title,
      renderCell: (params: GridRenderCellParams<RowData>) => (
        <FunctionCell value={params?.row?.function} />
      ),
    },
    {
      field: 'status',
      headerName: 'Technology',
      type: 'boolean',
      flex: 1,
      minWidth: 150,
      align: 'left',
      renderCell: ({ row }: { row: RowData }) => {
        const status = row.status ? 'Online' : 'Offline';
        const badge = row.status ? 'success' : 'error';
        return (
          <Stack direction="row" justifyContent="start" textAlign="start">
            <Chip label={status} sx={{ bgcolor: `${badge}.light`, color: `${badge}.dark` }} />
          </Stack>
        );
      },
    },
    {
      field: 'employed',
      headerName: 'Employed',
      flex: 1,
      align: 'left',
      minWidth: 120,
    },

    { field: 'action', headerName: '', flex: 1, align: 'center', sortable: false },
  ] as const;

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setRows(userTableData);
      setIsLoading(false);
      apiRef.current.autosizeColumns({ includeOutliers: true, expand: true });
    }, 500);
    return () => {
      clearInterval(timeoutId);
    };
  }, [userTableData, apiRef]);

  return (
    <>
      <DataGrid
        getRowHeight={() => 65}
        columns={columns}
        rows={rows}
        // onResize={() => {
        //   apiRef.current.autosizeColumns({
        //     includeOutliers: true,
        //     expand: true,
        //   });
        // }}
        loading={isLoading}
        apiRef={apiRef}
        hideFooterSelectedRowCount
        disableColumnResize
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        rowSelection={false}
        // autoPageSize
        // autoHeight
        // autosizeOptions={{
        //   includeOutliers: true,
        //   includeHeaders: true,
        //   outliersFactor: 1,
        //   expand: true,
        // }}
        slots={{
          loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
          pagination: CustomFooter,
        }}
        initialState={{ pagination: { paginationModel: { page: 1, pageSize: 5 } } }}
        pageSizeOptions={[5, 10, 25]}
        sx={{
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar': {
            width: '0.4em',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
          },
          '& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover': {
            background: '#555',
          },
        }}
      />
    </>
  );
};

export default UserTable;
