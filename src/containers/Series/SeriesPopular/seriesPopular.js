import React, { useState, useEffect } from "react";
import Template from "../../Template/Template";
import SeriesSliders from "../../../components/SeriesSlider/seriesSlider";
import classes from "./seriesPopular.module.css";
const SeriesPopular = (props) => {
  const [popular, setPopular] = useState(null);
  const [popular2, setPopular2] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=1"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPopular(data);
      });
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=2"
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
      <Template tv={true} Category={"Popular"}></Template>
      <SeriesSliders Category={popular} show={3.5}></SeriesSliders>
      <SeriesSliders Category={popular2} show={2.5}></SeriesSliders>
    </div>
  );
};

export default SeriesPopular;
