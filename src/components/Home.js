import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    backgroundImage: 'url("../images/books.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    padding: theme.spacing(8),
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& h1": {
      color: "#fff",
      textAlign: "center",
    },
    "& h3": {
      padding: theme.spacing(5),
      color: "#fff",
      width: 800,
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        width: "unset",
      },
    },
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
    <div component="main" className={classes.root}>
      <Container>
        <CssBaseline />
        <div className={classes.paper}>
          <h1>Welcome!</h1>
          <h3>
            Help us make our world a better place by buying some of our books,
            and at the same time, explore new worlds!
          </h3>
          <Link to="/register" className={classes.buttonN}>
            <Button fullWidth variant="contained">
              Register Now
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};
