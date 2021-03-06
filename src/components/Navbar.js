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
import axios from 'axios';
import { Redirect } from 'react-router-dom'
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
  buttonAdd: {
    marginLeft: theme.spacing(2),
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(0)
    },
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [activeBtn, setActiveBtn] = useState("home");

  const logout = (e) => {
    let tok = JSON.parse(localStorage.getItem('login'));
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': tok,
    }
    axios.post('http://0b637c001df5.ngrok.io/api/auth/token/logout/', { headers: headers })
      .then(function (response) {
        localStorage.removeItem('login');
        return <Redirect to='/' />
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
            {["home", "books", "about", "contact", "login"].map((item) => (
              <Link key={item} to={item === "home" ? "/" : "/" + item}>
                <LinkMaterial
                  component="button"
                  variant="body2"
                  onClick={() => setActiveBtn(item)}
                  color={activeBtn === item ? "textPrimary" : "textPrimary"}
                  className={classes.item}
                  key={item}
                >
                  {item.toUpperCase()}
                </LinkMaterial>
              </Link>
            ))}
            {
              localStorage.getItem('login') &&
              <Link to="/addBook" className={classes.buttonAdd}>
                <Button variant="outlined">Add book</Button>
              </Link> &&
              <Button variant="outlined" onClick={logout}>Logout</Button>
            }

          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};
