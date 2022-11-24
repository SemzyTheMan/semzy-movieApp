import React, { useEffect, useState } from "react";
import classes from "./tvGenre.module.css";
import GenreCard from "../../components/GenreCards/genreCard";
import { connect } from "react-redux";
import {Link} from "react-router-dom"
const TvGenre = (props) => {
  const [genres, setGenres] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/tv/list?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGenres(data.genres);
      });
  }, []);
  useEffect(() => {
    console.log(props.currentGenre);
  }, [props.currentGenre]);
  return (
    <div className={classes.Container}>
      {genres ? (
        genres.map((el, i) => (
          <Link to={"/tvgenres-section"} className={classes.Link}>
            <GenreCard
              key={el.id}
              activegenre={el}
              genre={el.name}
              backgroundColor={i % 2 == 0 ? "#0f766e" : "#171e31"}
            ></GenreCard>
          </Link>
        ))
      ) : (
        <div className={classes.Loading}></div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentGenre: state.currentGenre,
  };
};
export default connect(mapStateToProps)(TvGenre);
