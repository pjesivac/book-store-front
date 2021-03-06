import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "64px",
    display: "flex",
    alignItems: "center",
  },
  paper: {
    padding: theme.spacing(4),
    "& p": {
      marginTop: "1rem",
      fontWeight: "bold",
      fontSize: "18px",
      "& span": {
        fontWeight: "normal",
        marginLeft: "1rem",
      },
    },
  },
}));

export const Book = (props) => {
  const classes = useStyles();
  const [theBook, setTheBook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://b856bf28af30.ngrok.io/api/books/id/");
      result.data.results.forEach((book) => {
        let id = props.match.params.id;
        if (book.id.toString() === id) {
          setTheBook({ book });
        }
      });
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <Container>
      {theBook.length !== 0 ? (
        <Grid container spacing={2} className={classes.root} justify="center">
          <Grid item md={4}>
            <img alt="" src={theBook.image} />
          </Grid>
          <Grid item md={8}>
            <Paper className={classes.paper}>
              <p>
                Book name:<span>{theBook.name}</span>
              </p>
              <p>
                Author:<span>{theBook.author}</span>
              </p>
              <p>
                Overview:<span>{theBook.description}</span>
              </p>
              <p>
                Category:<span>{theBook.category.name}</span>
              </p>
              <p>
                Price:<span>{theBook.price}</span>
              </p>
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </Container>
  );
};
