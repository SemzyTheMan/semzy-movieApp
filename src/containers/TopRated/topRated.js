import React, { useState, useEffect } from "react";
import classes from "./topRated.module.css";
import Template from "../Template/Template";
import Sliders from "../../components/Slider/Sliders";
const TopRated = (props) => {
  const [TopRated1, setTopRated1] = useState(null);
  const [TopRated2, setTopRated2] = useState(null);

  const page = [1, 2];
  useEffect(() => {
    page.forEach((item) => {
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=${item}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          item == 1 ? setTopRated1(data) : setTopRated2(data);
        });
    });
  }, []);

  return (
    <div className={classes.Container}>
      <Template Category={"TopRated"}></Template>
      <Sliders Category={TopRated1} show={3.5}></Sliders>
      <Sliders Category={TopRated2} show={2.5}></Sliders>
    </div>
  );
};

export default TopRated;
