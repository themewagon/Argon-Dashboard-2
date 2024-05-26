import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import NoDataIcon from 'components/icons/table/NoDataIcon';

function CustomNoRows() {
  return (
    <Box
      sx={({ spacing, typography }) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: typography.pxToRem(200),
        marginTop: spacing(8),
      })}
    >
      <NoDataIcon
        sx={({ spacing }) => ({
          width: spacing(15),
          height: spacing(15),
        })}
      />
      <Box
        sx={({ spacing }) => ({
          mt: spacing(1),
          mb: spacing(2),
        })}
      >
        <Typography variant="subtitle2" color="text.secondary">
          No Data
        </Typography>
      </Box>
    </Box>
  );
}

export default CustomNoRows;
