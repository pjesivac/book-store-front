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
import axios from 'axios';
import { Redirect } from 'react-router-dom'
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
  const [state, setState] = useState({
    name: "",
    overview: "",
    price: "",
    author: "",
    category: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleFile = (e) => {
    let file = e.target.files[0];

    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tok = JSON.parse(localStorage.getItem('login'));
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': tok,
    }

    let newBook = new FormData();
    newBook.append('image', file);
    newBook.append('name', state.name);
    newBook.append('overview', state.overview);
    newBook.append('price', state.price);
    newBook.append('author', state.author);
    newBook.append('category', state.category);

    axios.post('http://0b637c001df5.ngrok.io/api/books', newBook, { headers: headers })
      .then(function (response) {
        if (response.status === 200) {
          return <Redirect to='/' />
        }
        else
          console.log("Some error ocurred");
      })
      .catch(function (error) {
        console.log(error);
      });

  };
  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Paper className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Name:</p>
            <TextField id="name" className="col-10" size="small" variant="outlined" onChange={handleChange} required />
          </div>
          <div className="row d-flex mb-3 align-items-start">
            <p className="col-2">Overview:</p>
            <TextField
              id="overview"
              size="small"
              className="col-10"
              multiline
              rows={4}
              variant="outlined"
              onChange={handleChange}
              required
            />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Price:</p>
            <TextField id="price" className="col-10" size="small" variant="outlined" onChange={handleChange} required />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Author:</p>
            <TextField id="author" className="col-10" size="small" variant="outlined" onChange={handleChange} required />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Category:</p>
            <TextField id="category" className="col-10" size="small" variant="outlined" onChange={handleChange} required />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Image:</p>
            <input
              type="file"
              className="form-control col-10 input-file"
              id="customFile"
              onChange={handleFile}
              required
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
