import { Box, Button, Checkbox, InputAdornment, Switch, TextField } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
const App = () => {
  //   return <Outlet />;
  return (
    <Box height={200} width={'100vw'} p={5}>
      <TextField
        placeholder="type here..."
        size="small"
        id="filled-basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconifyIcon fontSize="16px" color="red" icon="system-uicons:search" />
            </InputAdornment>
          ),
        }}
      />
      <br />
      <br />
      <br />
      <TextField placeholder="Email " id="filled-basic" />
      <br />
      <br />
      <TextField size="large" placeholder="Email " id="filled-basic" />
      <br />
      <br />
      <Button variant="outlined" color="primary">
        Add
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        color="primary"
        startIcon={<IconifyIcon icon="mdi:plus" width="56" height="56"></IconifyIcon>}
      >
        Follow
      </Button>
      <br />
      <br />
      <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} />
      <br />
      <br />
      <Checkbox />
    </Box>
  );
};

export default App;
