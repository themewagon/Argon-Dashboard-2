import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import NoDataIcon from 'components/icons/table/NoDataIcon';

const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  marginTop: '55px',
}));

function CustomNoRows() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        marginTop: '55px',
      }}
    >
      <NoDataIcon
        sx={({ spacing }) => ({
          width: spacing(15),
          height: spacing(15),
        })}
      />
      <Box sx={{ mt: 1 }}>
        <Typography variant="button">No Data</Typography>
      </Box>
    </Box>
  );
}

export default CustomNoRows;
