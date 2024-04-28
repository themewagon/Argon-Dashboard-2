import { Box, Chip, LinearProgress } from '@mui/material';
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
      cellClassName: 'name-column--cell',
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
          <Box display="flex" justifyContent="start" textAlign="start">
            <Chip label={status} sx={{ bgcolor: `${badge}.light`, color: `${badge}.dark` }} />
          </Box>
        );
      },
    },
    { field: 'employed', headerName: 'Employed', flex: 1, align: 'left', minWidth: 120 },

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
    <Box
      sx={({ palette }) => ({
        '& .name-column--cell': {
          color: palette.common.black,
        },
      })}
    >
      <DataGrid
        density="comfortable"
        columns={columns}
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
        // autoPageSize
        autoHeight
        autosizeOptions={{
          includeOutliers: true,
          includeHeaders: true,
          outliersFactor: 1,
          expand: true,
        }}
        slots={{
          loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
          pagination: CustomFooter,
        }}
        initialState={{ pagination: { paginationModel: { page: 1, pageSize: 5 } } }}
        pageSizeOptions={[5, 10, 25]}
      />
    </Box>
  );
};

export default UserTable;