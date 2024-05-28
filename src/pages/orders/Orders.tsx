import { Box, Button, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const OrdersPage = () => {
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
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" color="primary" size="large">
                Button
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="primary" size="large">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
            {/* <div>
                 <Button variant="outlined" size="large">
                   Large
                 </Button>
               </div>
               <div>
                 <Button size="large">
                   Large
                 </Button>
               </div> */}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Error
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" color="error" size="large">
                Button
              </Button>
              <Button
                variant="contained"
                color="error"
                size="large"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="error" size="large">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            warning
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" color="warning" size="large">
                Button
              </Button>
              <Button
                variant="contained"
                color="warning"
                size="large"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="warning" size="large">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Secondary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" color="secondary" size="large">
                Button
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="secondary" size="large">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Primary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="outlined" color="primary" size="large">
                Button
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <Button variant="text" color="primary" size="large">
                Button
              </Button>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Secondary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="outlined" color="secondary" size="large">
                Button
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <Button variant="text" color="secondary" size="large">
                Button
              </Button>
            </>
          </Stack>
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
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" color="primary">
                Button
              </Button>

              <Button
                variant="contained"
                color="primary"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="primary">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Error
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" color="error">
                Button
              </Button>

              <Button
                variant="contained"
                color="error"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="error">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Warning
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" color="warning">
                Button
              </Button>

              <Button
                variant="contained"
                color="warning"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="warning">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Secondary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" color="secondary">
                Button
              </Button>

              <Button
                variant="contained"
                color="secondary"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="secondary">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Primary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="outlined" color="primary" size="large">
                Button
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <Button variant="text" color="primary" size="large">
                Button
              </Button>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Secondary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="outlined" color="secondary" size="medium">
                Button
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="medium"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <Button variant="text" color="secondary" size="medium">
                Button
              </Button>
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
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" size="small" color="primary">
                Button
              </Button>

              <Button
                variant="contained"
                size="small"
                color="primary"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="primary" size="small">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Error
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" size="small" color="error">
                Button
              </Button>

              <Button
                variant="contained"
                size="small"
                color="error"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="error" size="small">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Warning
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" size="small" color="warning">
                Button
              </Button>

              <Button
                variant="contained"
                size="small"
                color="warning"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="warning" size="small">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Secondary
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="contained" size="small" color="secondary">
                Button
              </Button>

              <Button
                variant="contained"
                size="small"
                color="secondary"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <IconButton color="secondary" size="small">
                <IconifyIcon icon="gridicons:trash" />
              </IconButton>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Primary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="outlined" color="primary" size="large">
                Button
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <Button variant="text" color="primary" size="large">
                Button
              </Button>
            </>
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" color="action.active" mb={1.5}>
            Variant - Outlined (Secondary)
          </Typography>
          <Stack direction="row" alignItems="center" sx={{ '& button': { m: 1 } }}>
            <>
              <Button variant="outlined" color="secondary" size="small">
                Button
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                startIcon={<IconifyIcon icon="gridicons:trash" />}
              >
                Button
              </Button>
              <Button variant="text" color="secondary" size="small">
                Button
              </Button>
            </>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrdersPage;
