import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

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
      <h1>Home page</h1>
      <SimpleImageSlider width={896} height={504} images={images} />
    </div>
  );
};
