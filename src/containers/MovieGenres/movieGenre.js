import React, { useEffect, useState } from "react";
import classes from "./movieGenre.module.css";
import GenreCard from "../../components/GenreCards/genreCard";
import { Link } from "react-router-dom";
const MovieGenre = (props) => {
  const [genres, setGenres] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGenres(data.genres);
      });
  }, []);

  return (
    <Link to={"/genresort"} className={classes.Container}>
      {genres ? (
        genres.map((el, i) => (
          <GenreCard
            activegenre={el}
            key={el.id}
            genre={el.name}
            backgroundColor={i % 2 == 0 ? "#0f766e" : "#171e31"}
          ></GenreCard>
        ))
      ) : (
        <div className={classes.Loading}></div>
      )}
    </Link>
  );
};
export default MovieGenre;
