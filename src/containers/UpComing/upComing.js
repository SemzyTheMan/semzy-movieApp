import React, { useState, useEffect } from "react";
import classes from "./upComing.module.css";
import Template from "../Template/Template";
import Sliders from "../../components/Slider/Sliders";
const UpComing = (props) => {
  const [UpComing1, setUpComing1] = useState(null);
  const [UpComing2, setUpComing2] = useState(null);

  const page = [1, 2];
  useEffect(() => {
    page.forEach((item) => {
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=${item}`
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
      <Template Category={"Upcoming"}></Template>
      <Sliders Category={UpComing1} show={3.5}></Sliders>
      <Sliders Category={UpComing2} show={2.5}></Sliders>
    </div>
  );
};

export default UpComing;
