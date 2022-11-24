import React from "react";
import classes from "./seriesSlider.module.css";
import SeriesCard from "../SeriesCard/seriesCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
const SeriesSliders = (props) => {
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
              slidesToShow: 1.5,
              dots: false,
            },
          },
        ]}
      >
        {props.Category ? (
          props.Category.results.map((el) => (
            <SeriesCard
              tv={props.tv}
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
            ></SeriesCard>
          ))
        ) : (
          <div></div>
        )}
      </Slider>
    </div>
  );
};
export default SeriesSliders;
