import React, { useState, useEffect } from "react";
import classes from "./NowPlaying.module.css";
import Template from "../Template/Template";
import Sliders from "../../components/Slider/Sliders";
const NowPlaying = (props) => {
  const [nowPlaying1, setNowPlaying1] = useState(null);
  const [nowPlaying2, setNowPlaying2] = useState(null);

  const page = [1, 2];
  useEffect(() => {
    page.forEach((item) => {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=${item}`
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
      <Template Category={"Now Playing"}></Template>
      <Sliders Category={nowPlaying1} show={3.5}></Sliders>
      <Sliders Category={nowPlaying2} show={2.5}></Sliders>
    </div>
  );
};

export default NowPlaying;
