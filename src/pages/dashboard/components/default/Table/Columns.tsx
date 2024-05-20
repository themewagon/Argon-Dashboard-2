import { Chip } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import ProductCell from './ProductCell';
import { TopProductsRowData, TransactionRowData } from './table-data';

const transactionColumns: GridColDef<TransactionRowData>[] = [
  {
    field: 'name',
    renderCell: (params) => {
      return <strong style={{ fontWeight: 500 }}>{params.value}</strong>;
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

const topProductsColumns: GridColDef<TopProductsRowData>[] = [
  {
    field: 'item',
    renderCell: (params) => {
      return <ProductCell value={params?.value} />;

      //   return <strong style={{ fontWeight: 500 }}>{params.value.title}</strong>;
    },
    headerName: 'Name',
    width: 100,
  },
  {
    field: 'price',
    renderCell: (params) => {
      return <>${params.value}</>;

      //   return <strong style={{ fontWeight: 500 }}>{params.value.title}</strong>;
    },
    headerName: 'Price',
    width: 100,
  },
  { field: 'sold', headerName: 'Units Sold', width: 100 },
];

export { topProductsColumns, transactionColumns };
