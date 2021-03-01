import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";

export const Home = () => {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Link to="/login" className="btn btn-info">
        Login
      </Link>
      <Link to="/register" className="btn btn-info">
        Register
      </Link>
    </Container>
  );
};
