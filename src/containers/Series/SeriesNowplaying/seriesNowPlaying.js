import React, { useState, useEffect } from "react";
import classes from "./seriesNowPlaying.module.css";
import Template from "../../Template/Template";
import Sliders from "../../../components/Slider/Sliders";
import SeriesSliders from "../../../components/SeriesSlider/seriesSlider";

const SeriesNowPlaying = (props) => {
  const [nowPlaying1, setNowPlaying1] = useState(null);
  const [nowPlaying2, setNowPlaying2] = useState(null);

  const page = [1, 2];
  useEffect(() => {
    page.forEach((item) => {
      fetch(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=${item}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          item == 1 ? setNowPlaying1(data) : setNowPlaying2(data);
        });
    });
  }, []);

  return (
    <div className={classes.Container}>
      <Template tv={true} Category={"Now Playing"}></Template>
      <SeriesSliders Category={nowPlaying1} show={3.5}></SeriesSliders>
      <SeriesSliders Category={nowPlaying2} show={2.5}></SeriesSliders>
    </div>
  );
};

export default SeriesNowPlaying;
