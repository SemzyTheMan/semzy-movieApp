import React, { useState, useEffect } from "react";
import Template from "../Template/Template";
import Sliders from "../../components/Slider/Sliders";
import classes from "./Popular.module.css";
const Popular = (props) => {
  const [popular, setPopular] = useState(null);
  const [popular2, setPopular2] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPopular(data);
      });
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=2"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPopular2(data);
      });
  }, []);

  return (
    <div className={classes.Container}>
      {" "}
      <Template Category={"Popular"}></Template>
      <Sliders Category={popular} show={3.5}></Sliders>
      <Sliders Category={popular2} show={2.5}></Sliders>
    </div>
  );
};

export default Popular;
