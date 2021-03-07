import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Redirect } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const AddBook = () => {
  const classes = useStyles();
  const [options, setOptions] = useState([]);
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    printNo: "",
    author: "",
    category: "",
    image: "",
  });

  console.log(state)

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios("http://7d9575348cd9.ngrok.io/api/categories/");
      setOptions(result.data);
    };
    fetchData();
  }, [])

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCategory = (e) => {
    setState((prevState)=> ({ 
      ...prevState,
      category: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let tok = JSON.parse(localStorage.getItem("login"));
    const headers = {
      "Content-Type": "application/json",
      Authorization: tok,
    };

    axios
      .post("http://7d9575348cd9.ngrok.io/api/books/", JSON.stringify(state), {
        headers: headers,
      })
      .then(function (response) {
        if (response.status === 200) {
          return <Redirect to="/" />;
        } else console.log("Some error ocurred");
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
            <TextField
              id="name"
              className="col-10"
              size="small"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </div>
          <div className="row d-flex mb-3 align-items-start">
            <p className="col-2">Description:</p>
            <TextField
              id="description"
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
            <TextField
              id="price"
              className="col-10"
              size="small"
              type="number"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Print no:</p>
            <TextField
              id="printNo"
              className="col-10"
              size="small"
              type="number"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Author:</p>
            <TextField
              id="author"
              className="col-10"
              size="small"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </div>
          {/* <div className="row d-flex align-items-baseline">
            <p className="col-2">Category:</p>
            <TextField
              id="category"
              className="col-10"
              size="small"
              variant="outlined"
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Category:</p>
            <FormControl className="col-10" variant="outlined" size="small">
              <Select
                native
                size="small"
                value={state.age}
                onChange={handleCategory}
              >
                <option aria-label="None" value="" />
                {options.map((el) => {
                  return <option key={el.id} value={el.id}>{el.name}</option>;
                })}
              </Select>
            </FormControl>
          </div>
          <div className="row d-flex align-items-baseline">
            <p className="col-2">Image:</p>
            <TextField
              id="image"
              className="col-10"
              size="small"
              variant="outlined"
              onChange={handleChange}
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
