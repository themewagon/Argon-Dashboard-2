import { Box, Divider, Grid, Stack, TextField, Typography } from '@mui/material';

const ProductsPage = () => {
  return (
    <Box>
      <Box px={1}>
        <Typography variant="h2" mb={5}>
          Large
        </Typography>
      </Box>
      <Grid container spacing={2} px={1}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Primary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1 } }}>
            <>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField id="standard-basic" label="Standard" variant="standard" />
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Error
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            warning
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Secondary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Primary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Secondary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
      </Grid>

      <Divider />

      <Box px={1}>
        <Typography variant="h2" mb={5}>
          Medium
        </Typography>
      </Box>
      <Grid container spacing={2} px={1}>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Primary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Error
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Warning
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Secondary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Primary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Secondary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
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
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Error
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Warning
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Secondary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Primary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Secondary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}></Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductsPage;
