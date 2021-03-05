/* eslint-disable jsx-a11y/anchor-is-valid */
import "../App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@material-ui/core/Container";

export const Home = () => {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://rickandmortyapi.com/api/character");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div
        data-uk-slider="{center:true}"
        className="uk-position-relative uk-visible-toggle uk-light slider"
        tabIndex="-1"
        uk-slider="sets: true"
      >
        <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m">
          {data.results.map((item) => (
            <li className="uk-transition-toggle" tabIndex="0" key={item.id}>
              <img alt={item.id} src={item.image}></img>
              {/* <div className="uk-position-center uk-panel">
                <h1 className="uk-transition-slide-bottom-small">{item.name}</h1>
              </div> */}
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          uk-slidenav-previous={toString()}
          uk-slider-item="previous"
        >
        </a>
        <a
          href="#"
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          uk-slidenav-next={toString()}
          uk-slider-item="next"
        >
        </a>
      </div>
    </Container>
  );
};
