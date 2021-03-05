import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";

export const Book = (props) => {
  const [theBook, setTheBook] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://rickandmortyapi.com/api/character");
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
        <img style={{ height: "300px" }} alt="" src={theBook.book.image} />
      ) : (
        <div></div>
      )}
    </Container>
  );
};
