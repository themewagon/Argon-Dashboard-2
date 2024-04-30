import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import IconifyIcon from 'components/base/IconifyIcon';

const CheckboxComponent: Components<Omit<Theme, 'components'>>['MuiCheckbox'] = {
  defaultProps: {
    icon: <IconifyIcon icon="carbon:checkbox" />,
    checkedIcon: <IconifyIcon icon="carbon:checkbox-checked-filled" />,
    // indeterminateIcon: <CheckBoxIndeterminateIcon viewBox="0 0 16 16" />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      borderRadius: 0,
      '&:hover': {
        backgroundColor: theme.palette.transparent.main,
      },
      '& .iconify': {
        fill: theme.palette.transparent.main,
      },
      '&.Mui-disabled svg': {
        color: theme.palette.grey[400],
      },
    }),

    sizeSmall: {
      '& .iconify': {
        width: 20,
        height: 20,
      },
    },
    sizeMedium: {
      '& .iconify': {
        width: 25,
        height: 25,
      },
    },
  },
};

export default CheckboxComponent;
