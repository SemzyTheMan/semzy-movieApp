import React, { useState, useEffect } from "react";
import classes from "./seriesTopRated.module.css";
import Template from "../../Template/Template";
import SeriesSliders from "../../../components/SeriesSlider/seriesSlider";
const SeriesTopRated = (props) => {
  const [TopRated1, setTopRated1] = useState(null);
  const [TopRated2, setTopRated2] = useState(null);

  const page = [1, 2];
  useEffect(() => {
    page.forEach((item) => {
      fetch(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=${item}`
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
      <Template tv={true} Category={"TopRated"}></Template>
      <SeriesSliders Category={TopRated1} show={3.5}></SeriesSliders>
      <SeriesSliders Category={TopRated2} show={2.5}></SeriesSliders>
    </div>
  );
};

export default SeriesTopRated;
