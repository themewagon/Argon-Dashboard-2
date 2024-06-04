import { Chip, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { TransactionRowData } from 'data/dashboard/table';

export const transactionColumns: GridColDef<TransactionRowData>[] = [
  {
    field: 'name',
    renderCell: (params) => {
      return <Typography sx={{ fontWeight: 500 }}>{params.value}</Typography>;
    },
    headerName: 'Name',
    width: 100,
  },
  { field: 'date', headerName: 'Date', width: 100 },
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
