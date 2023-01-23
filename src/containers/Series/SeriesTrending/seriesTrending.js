import React from "react";
import classes from "./seriesTrending.module.css";
import SeriesTrendCard from "../../../components/seriesTrending/seriesTrend";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SeriesTrending = (props) => {
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=45078ff0ca2e11b5c99a758170885e75"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTrending(data);
      });
  }, []);

  return (
    <div className={classes.Container}>
      <h1>Tv Series</h1>
      <div className={classes.TrendingText}>
        <h1>Trending</h1>
        <p>SERIES</p>
      </div>
      <div className={classes.swiper}>
        <Slider
          dots={false}
          slidesToShow={2.5}
          slidesToScroll={2}
          autoplay={false}
          arrows={false}
          infinite={false}
          responsive={[{ breakpoint: 800, settings: { slidesToShow: 1.5 } }]}
        >
          {trending ? (
            trending.results.map((el) => (
              <SeriesTrendCard
                type={"Tv"}
                tv={true}
                key={el.id}
                identity={el.id}
                title={el.title ? el.title : el.name}
                backgroundImage={
                  "http://image.tmdb.org/t/p/w500" + el.backdrop_path
                }
              ></SeriesTrendCard>
            ))
          ) : (
            <div></div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default SeriesTrending;
