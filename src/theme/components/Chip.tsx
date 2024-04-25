import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const ChipComponent: Components<Omit<Theme, 'components'>>['MuiChip'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      height: 'auto',
      padding: theme.spacing(0.5, 1),
      fontSize: '0.65rem',
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'uppercase',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      borderRadius: theme.shape.borderRadius,
      position: 'relative',
    }),
    label: {
      padding: 0,
    },
  },
};

export default ChipComponent;
