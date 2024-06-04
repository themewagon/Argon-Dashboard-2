import { Box, Divider, Grid, Stack, TextField, Typography } from '@mui/material';

const ProductsPage = () => {
  return (
    <Box>
      <Box px={1}>
        <Typography variant="h2" mb={5}>
          Default / Medium
        </Typography>
      </Box>
      <Grid container spacing={2} px={1}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Primary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" color="primary" />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField id="standard-basic" label="Standard" variant="standard" />
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Error
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" color="error" />
              <TextField id="filled-basic" label="Filled" variant="filled" color="error" />
              <TextField id="standard-basic" label="Standard" variant="standard" color="error" />
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            warning
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" color="warning" />
              <TextField id="filled-basic" label="Filled" variant="filled" color="warning" />
              <TextField id="standard-basic" label="Standard" variant="standard" color="warning" />
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Secondary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                color="secondary"
              />
              <TextField id="filled-basic" label="Filled" variant="filled" color="secondary" />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                color="secondary"
              />
            </>
          </Stack>
        </Grid>
      </Grid>

      <Divider />

      <Box px={1}>
        <Typography variant="h2" mb={5}>
          Small
        </Typography>
      </Box>
      <Grid container spacing={2} px={1}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Primary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
              <TextField id="filled-basic" label="Filled" variant="filled" size="small" />
              <TextField id="standard-basic" label="Standard" variant="standard" size="small" />
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Error
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size="small"
                color="error"
              />
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                size="small"
                color="error"
              />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                size="small"
                color="error"
              />
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Warning
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size="small"
                color="warning"
              />
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                size="small"
                color="warning"
              />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                size="small"
                color="warning"
              />
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Secondary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                size="small"
                color="secondary"
              />
              <TextField
                id="filled-basic"
                label="Filled"
                variant="filled"
                size="small"
                color="secondary"
              />
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                size="small"
                color="secondary"
              />
            </>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
