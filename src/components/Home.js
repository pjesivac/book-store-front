import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",

  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/1600x900/?book,library)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  typography: {
    fontFamily: 'Times New Roman',
  },
  buttonN: {
    margin: theme.spacing(2, 2),
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
    },
  },

}));

export const Home = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid className={classes.image}>
        <div className={classes.paper}>
          <Typography align="center" color="secondary" variant="h3">Welcome!</Typography>
          <Typography align="center" color="secondary" variant="h4">Help us make our world a better place by buying some of our books, and at the same time, explore new worlds!</Typography>
          <Link to="/register" className={classes.buttonN}>
            <Button fullWidth variant="contained" color="primary">Register Now</Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}