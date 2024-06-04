import { GridColDef } from '@mui/x-data-grid';
import ProductCell from 'components/sections/dashboard/topProducts/ProductCell';
import { TopProductsRowData } from 'data/dashboard/table';

export const topProductsColumns: GridColDef<TopProductsRowData>[] = [
  {
    field: 'item',
    renderCell: (params) => {
      return <ProductCell value={params?.value} />;
    },
    headerName: 'Name',
    minWidth: 200,
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
  { field: 'sold', headerName: 'Units Sold', width: 100, align: 'left' },
];
