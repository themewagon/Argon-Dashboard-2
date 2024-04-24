import { Theme } from '@mui/material';

import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

const DataGridComponent: DataGridComponents<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderBottomRightRadius: theme.spacing(2),
      borderBottomLeftRadius: theme.spacing(2),
      borderTopRightRadius: theme.spacing(2),
      borderTopLeftRadius: theme.spacing(2),
      boxShadow: theme.shadows[1],
      border: 0,
      backgroundColor: theme.palette.white.main,

      '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within': {
        outline: 'none !important',
      },
      '& .MuiDataGrid-cell:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      },
      '& .MuiDataGrid-cell:focus': {
        outline: 'none',
      },
      '& .MuiDataGrid-main': {
        borderTopRightRadius: theme.spacing(2),
        borderTopLeftRadius: theme.spacing(2),
      },
    }),
    cell: ({ theme }) => ({
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      outline: 'none',
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightBold,
      '&.name-column--cell[data-colindex="0"]': {
        paddingLeft: theme.spacing(1),
      },
      borderRadius: 0,
      borderBottom: 1,
      borderBottomColor: theme.palette.grey[300],
      lineHeight: 0.65,
      display: 'flex',
      alignItems: 'center',
    }),

    columnHeader: ({ theme }) => ({
      backgroundColor: theme.palette.white.main,
      fontSize: theme.typography.pxToRem(10),
      '&.MuiDataGrid-columnHeader': {
        paddingLeft: theme.spacing(3),
      },
      paddingTop: theme.spacing(2),
      '& .MuiDataGrid-columnHeaderTitle': {
        fontWeight: `${theme.typography.fontWeightBold} !important`,
        color: theme.palette.text.secondary,
      },
    }),
    columnHeaderTitleContainer: {
      justifyContent: 'start !important',
    },
    // row: {
    //   height: '65px !important',
    // },
  },
};

export default DataGridComponent;
