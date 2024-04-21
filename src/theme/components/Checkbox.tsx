import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import CheckBoxBlankIcon from 'components/icons/CheckBoxBlankIcon';
import CheckBoxCheckedIcon from 'components/icons/CheckBoxCheckedIcon';

const CheckboxComponent: Components<Omit<Theme, 'components'>>['MuiCheckbox'] = {
  defaultProps: {
    icon: <CheckBoxBlankIcon sx={{ color: 'neutral.contrastText' }} />,
    checkedIcon: <CheckBoxCheckedIcon />,
    // indeterminateIcon: <CheckBoxIndeterminateIcon viewBox="0 0 16 16" />,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: 0,
      borderRadius: 0,
      '.MuiSvgIcon-fontSizeMedium': {
        fontSize: 20,
      },
      '.MuiSvgIcon-fontSizeSmall': {
        fontSize: 16,
      },
      '&.Mui-disabled': {
        '.MuiSvgIcon-root': {
          color: theme.palette.grey[100],
        },
      },
    }),
    sizeSmall: { fontSize: 16 },
    sizeMedium: { fontSize: 20 },
  },
};

export default CheckboxComponent;
