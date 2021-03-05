import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& p": {
      fontSize: "18px",
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const AddBook = () => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper className={classes.paper}>
        <form className={classes.form} noValidate>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Name:</p>
            <TextField className="col-10" size="small" variant="outlined" />
          </div>
          <div className="row d-flex mb-3 align-items-start">
            <p className="col-2">Overview:</p>
            <TextField
              size="small"
              className="col-10"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Price:</p>
            <TextField className="col-10" size="small" variant="outlined" />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Author:</p>
            <TextField className="col-10" size="small" variant="outlined" />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Category:</p>
            <TextField className="col-10" size="small" variant="outlined" />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Image:</p>
            <input
              type="file"
              className="form-control col-10 input-file"
              id="customFile"
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
