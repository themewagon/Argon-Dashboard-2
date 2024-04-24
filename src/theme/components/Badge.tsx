import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const BadgeComponent: Components<Omit<Theme, 'components'>>['MuiBadge'] = {
  defaultProps: {},
  styleOverrides: {},
};

export default BadgeComponent;
