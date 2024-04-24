import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import pxToRem from 'theme/functions/pxToRem';

const ChipComponent: Components<Omit<Theme, 'components'>>['MuiChip'] = {
  defaultProps: {},
  styleOverrides: {
    root: ({ theme }) => ({
      height: 'auto',
      padding: `${pxToRem(4)} ${pxToRem(8)}`,
      fontSize: '0.65rem',
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'uppercase',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      verticalAlign: 'baseline',
      borderRadius: pxToRem(4),
      position: 'relative',
      '& .MuiChip-label': {
        padding: 0,
      },
    }),
  },
};

export default ChipComponent;
