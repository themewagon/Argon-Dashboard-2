import { Theme } from '@mui/material';

import type { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';

const DataGridComponent: DataGridComponents<Omit<Theme, 'components'>>['MuiDataGrid'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 4,
      boxShadow: theme.shadows[1],
      border: 0,
      backgroundColor: theme.palette.common.white,
    }),
    main: ({ theme }) => ({
      borderTopRightRadius: theme.shape.borderRadius * 4,
      borderTopLeftRadius: theme.shape.borderRadius * 4,
    }),
    columnSeparator: {
      display: 'none',
    },
    cell: ({ theme }) => ({
      padding: theme.spacing(1),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      outline: 'none',
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(12),
      fontWeight: theme.typography.fontWeightBold,
      //   '&.name-column--cell[data-colindex="0"]': {
      //     paddingLeft: theme.spacing(1),
      //   },
      borderRadius: 0,
      borderBottom: 1,
      borderBottomColor: theme.palette.grey[300],
      lineHeight: 0.65,
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      },
      '&:focus-within': {
        outline: 'none !important',
      },
    }),

    columnHeader: ({ theme }) => ({
      backgroundColor: theme.palette.common.white,
      fontSize: theme.typography.pxToRem(10),
      paddingLeft: theme.spacing(3),
      paddingTop: theme.spacing(2),
      '&:focus-within': {
        outline: 'none !important',
      },
    }),
    columnHeaderTitle: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.text.secondary,
    }),
    columnHeaderTitleContainer: {
      justifyContent: 'start !important',
    },
    footerContainer: ({ theme }) => ({
      padding: theme.spacing(2),
    }),
    sortIcon: ({ theme }) => ({
      width: theme.spacing(1.8),
      height: theme.spacing(1.8),
    }),
  },
};

export default DataGridComponent;
