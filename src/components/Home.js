import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";

const images = [
  { url: "images/1.jpg" },
  { url: "images/2.jpg" },
  { url: "images/3.jpg" },
  { url: "images/4.jpg" },
  { url: "images/5.jpg" },
  { url: "images/6.jpg" },
  { url: "images/7.jpg" },
];

export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <SimpleImageSlider width={200} height={100} images={images} />
        </div>
        <div className="col-sm-4 card mt-2">
          <div className="d-grid gap-2 col-6 mx-auto">
            <span><i>Welcome to <b>Navbar</b></i></span>
            <Link to="/login" className="btn btn-info mt-2">Login</Link>
            <Link to="/register" className="btn btn-info mb-2">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
