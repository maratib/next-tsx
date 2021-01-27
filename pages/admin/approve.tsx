import { Grid, makeStyles, Paper } from '@material-ui/core';
import AdminLayout from '../../components/layouts/AdminLayout';

const useStyles = makeStyles((theme) => ({
  fixedHeight: {
    height: 240,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  }
}));

export default function Approve() {
  const classes = useStyles();
  return (
    <AdminLayout title="Admin">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={classes.paper}>
            <h1>Hello from Page</h1>
          </Paper>
        </Grid>
      </Grid>
    </AdminLayout>
  );
}

