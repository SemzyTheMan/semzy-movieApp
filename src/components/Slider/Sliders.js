import React, { useState } from "react";
import classes from "./Sliders.module.css";
import MoviesCard from "../MoviesCard/moviesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
const Sliders = (props) => {
  return (
    <div className={classes.swiper}>
      <Slider
        dots={true}
        slidesToShow={props.show}
        slidesToScroll={2}
        autoplay={false}
        arrows={false}
        infinite={false}
        dotsClass={`slick-dots slick-thumb`}
        customPaging={() => {
          return <div className={classes.Dots}></div>;
        }}
        responsive={[
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              dots: false,
              slidesToShow: 1.5,
            },
          },
        ]}
      >
        {props.Category ? (
          props.Category.results.map((el) => (
            <MoviesCard
              identity={el.id}
              key={el.id}
              title={el.title ? el.title.trimStart() : el.name.trimStart()}
              year={
                el.release_date
                  ? el?.release_date?.slice(0, 4)
                  : el?.first_air_date?.slice(0, 4)
              }
              backgroundImage={
                el.backdrop_path
                  ? "http://image.tmdb.org/t/p/w500" + el.backdrop_path
                  : null
              }
            ></MoviesCard>
          ))
        ) : (
          <div></div>
        )}
      </Slider>
    </div>
  );
};
export default Sliders;
