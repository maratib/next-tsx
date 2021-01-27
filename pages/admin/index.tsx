import { Grid, makeStyles, Paper } from '@material-ui/core';
import clsx from 'clsx';
import AdminLayout from '../../components/layouts/AdminLayout'

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    height: 240,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))

export default function () {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <AdminLayout title="Admin">
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>

          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>

          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>

          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>

          </Paper>
        </Grid>
      </Grid>
    </AdminLayout>
  )
}
