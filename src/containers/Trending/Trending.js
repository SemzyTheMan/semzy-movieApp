import React from "react";
import classes from "./Trending.module.css";
import Card from "../../components/Card/card";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Trending = (props) => {
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=45078ff0ca2e11b5c99a758170885e75"
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
      <h1>Movies</h1>
      <div className={classes.TrendingText}>
        <h1>Trending</h1>
        <p>MOVIES</p>
      </div>
      <div className={classes.swiper}>
        <Slider
          dots={false}
          slidesToShow={2.5}
          slidesToScroll={2}
          autoplay={false}
          arrows={false}
          infinite={false}
          responsive={[
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1.5,
              },
            },
          ]}
        >
          {trending ? (
            trending.results.map((el) => (
              <Card
                type={"Movie"}
                tv={false}
                identity={el.id}
                key={el.id}
                title={el.title ? el.title : el.name}
                backgroundImage={
                  "http://image.tmdb.org/t/p/w500" + el.backdrop_path
                }
              ></Card>
            ))
          ) : (
            <div></div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default Trending;
