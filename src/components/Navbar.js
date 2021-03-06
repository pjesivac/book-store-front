import React from "react";
import { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LinkMaterial from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { auth } from "../auth/Auth";

const useStyles = makeStyles((theme) => ({
  mainbar: {
    width: "100%",
    boxShadow: "0 5px 20px -10px #000",
  },
  toolbar: {
    minHeight: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  toolbarTitle: {
    letterSpacing: 1.25,
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(0),
    },
  },
  menuButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },
  item: {
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
    },
  },
  buttonN: {
    marginLeft: theme.spacing(2),
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0),
    },
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [isAuth, setIsAuth] = useState(auth.getAuthStatus());

  return (
    <div className={classes.mainbar}>
      <Container>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            className={classes.toolbarTitle}
          >
            BOOK STORE
          </Typography>
          <Box className={classes.menuButtons}>
            {["home", "books", "about", "contact"].map((item) => (
              <Link key={item} to={item === "home" ? "/" : "/" + item}>
                <LinkMaterial
                  component="button"
                  variant="body2"
                  color={"textPrimary"}
                  className={classes.item}
                  key={item}
                >
                  {item.toUpperCase()}
                </LinkMaterial>
              </Link>
            ))}
            {isAuth ? (
              <div>
                <Link to="/addBook" className={classes.buttonN}>
                  <Button variant="outlined">Add book</Button>
                </Link>
                <Button
                  className={classes.buttonN}
                  variant="outlined"
                  onClick={auth.logout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link key={"login"} to={"/login"}>
                <LinkMaterial
                  component="button"
                  variant="body2"
                  color={"textPrimary"}
                  className={classes.item}
                  key={"login"}
                >
                  LOGIN
                </LinkMaterial>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};
