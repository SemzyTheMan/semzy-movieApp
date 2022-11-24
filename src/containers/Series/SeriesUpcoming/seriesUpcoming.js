import React, { useState, useEffect } from "react";
import classes from "./seriesUpcoming.module.css";
import Template from "../../Template/Template";
import SeriesSliders from "../../../components/SeriesSlider/seriesSlider";
const SeriesUpComing = (props) => {
  const [UpComing1, setUpComing1] = useState(null);
  const [UpComing2, setUpComing2] = useState(null);

  const page = [1, 2];
  useEffect(() => {
    page.forEach((item) => {
      fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=${item}`
      )
        .then((response) => {
        
          return response.json();
        })
        .then((data) => {
        
          item == 1 ? setUpComing1(data) : setUpComing2(data);
        });
    });
  }, []);

  return (
    <div className={classes.Container}>
      <Template tv={true} Category={"Upcoming"}></Template>
      <SeriesSliders Category={UpComing1} show={3.5}></SeriesSliders>
      <SeriesSliders Category={UpComing2} show={2.5}></SeriesSliders>
    </div>
  );
};

export default SeriesUpComing;
