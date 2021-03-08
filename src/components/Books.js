import React from "react";
import { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { Grid } from "@material-ui/core";
import BookCard from "./BookCard";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "64px auto",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    paddingLeft: "64px",
    paddingRight: "64px",
  },
}));

export const Books = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let tok = JSON.parse(localStorage.getItem("login"));
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${tok}`,
    };
    const fetchData = async () => {
      const result = await axios(
        `http://bd474173e194.ngrok.io/api/books/?search=${search}`,
        {
          headers: headers,
        }
      );
      setBooks(result.data);
      setLoading(false);
    };
    fetchData();
  }, [search]);

  const booksToShow = () => {
    return books.map((el, index) => {
      return (
        <Grid key={index} className={classes.center} item xs={12} sm={6} md={4}>
          <BookCard bookInfo={el} key={index}></BookCard>
        </Grid>
      );
    });
  };

  return (
    <Container>
      <div className="wrapp">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-full-width"
            label=""
            style={{ margin: 8 }}
            placeholder="Search..."
            helperText=""
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon />
        </form>
        {loading === true ? (
          <div className={classes.center}>
            <CircularProgress />
          </div>
        ) : (
          <Grid
            container
            spacing={4}
            className={classes.gridContainer}
            justify="center"
          >
            {booksToShow()}
          </Grid>
        )}
      </div>
    </Container>
  );
};
