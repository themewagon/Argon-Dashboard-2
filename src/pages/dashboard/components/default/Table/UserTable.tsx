import { Box, Chip, LinearProgress } from '@mui/material';
import {
  DataGrid,
  DEFAULT_GRID_AUTOSIZE_OPTIONS,
  GridApi,
  GridColDef,
  GridRenderCellParams,
  GridRowModel,
  GridSlots,
  useGridApiRef,
} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import AuthorCell, { AuthorData } from './AuthorCell';
import { userTableData } from './Data';
import FunctionCell, { FunctionRole } from './FunctionCell';

interface RowData {
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
      width: 395,
      //   type: 'string',
      renderCell: (params: GridRenderCellParams<RowData>) => <AuthorCell value={params.value} />,
    },
    {
      field: 'function',
      headerName: 'Function',
      flex: 1,
      minWidth: 100,
      align: 'left',
      renderCell: (params: GridRenderCellParams<RowData>) => <FunctionCell value={params.value} />,
    },
    {
      field: 'status',
      headerName: 'Technology',
      type: 'boolean',
      flex: 1,
      align: 'left',
      minWidth: 100,
      renderCell: ({ row }: { row: RowData }) => {
        const status = row.status ? 'Online' : 'Offline';
        const badge = row.status ? 'success' : 'error';
        return <Chip label={status} sx={{ bgcolor: `${badge}.light`, color: `${badge}.dark` }} />;
      },
    },
    { field: 'employed', headerName: 'Employed' },

    { field: 'action', headerName: '', flex: 1, align: 'center' },
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
          color: palette.black.dark,
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
        slots={{
          loadingOverlay: LinearProgress as GridSlots['loadingOverlay'],
        }}
        apiRef={apiRef}
        hideFooterSelectedRowCount
        disableColumnResize
        disableColumnMenu
        disableColumnSelector
        disableRowSelectionOnClick
        autoPageSize
        autoHeight
        sortModel={[
          {
            field: 'author.name',
            sort: 'asc',
          },
          {
            field: 'function.title',
            sort: 'asc',
          },
        ]}
        autosizeOptions={{
          includeOutliers: true,
          includeHeaders: true,
          outliersFactor: 1.5,
          expand: DEFAULT_GRID_AUTOSIZE_OPTIONS.expand,
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        getRowId={(row: GridRowModel) => row.id}
      />
    </Box>
  );
};

export default UserTable;
