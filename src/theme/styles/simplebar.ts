import { Theme } from '@mui/material';

const simplebar = (theme: Theme) => ({
  '& .simplebar-track': {
    '&.simplebar-vertical': {
      '& .simplebar-scrollbar': {
        '&:before': {
          cursor: 'grab',
          border: 1,
          borderStyle: 'solid',
          borderColor: theme.palette.common.white,
          width: `60%`,
          maxHeight: 200,
          margin: theme.spacing(2, 'auto'),
          backgroundColor: theme.palette.grey[300],
        },

        '&.simplebar-visible': {
          '&:before': {
            opacity: 1,
          },
        },
      },
    },
  },
});
export default simplebar;
