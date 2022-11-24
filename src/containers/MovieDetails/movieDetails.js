import React, { useEffect, useState } from "react";
import classes from "./movieDetails.module.css";
import Rating from "react-rating";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import Genre from "../../components/genre";
import Cast from "../../components/Cast/cast";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/spinner";
const MovieDetails = (props) => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const myId = JSON.parse(localStorage.getItem("id"));
    fetch(
      `https://api.themoviedb.org/3/movie/${myId}/credits?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&with_cast`
    )
      .then((response) => response.json())
      .then((data) => {
        setCast(data);
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${myId}?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  let rate = (Math.random() * 5).toFixed(2);
  return (
    <div className={classes.Wrap}>
      {movie ? (
        <div className={classes.Container}>
          <div
            className={classes.Img}
            style={{
              backgroundImage: `url(http://image.tmdb.org/t/p/w500${movie.poster_path})`,
            }}
          ></div>

          <div className={classes.rightsection}>
            <h1 className={classes.title}>{movie.original_title}</h1>
            <p className={classes.tagline}>{movie.tagline}</p>

            <div className={classes.Rating}>
              <span className={classes.span}>{rate > 3.5 ? rate : "4.21"}</span>
              <Rating
                start={0}
                stop={5}
                step={1}
                initialRating={rate > 3.5 ? rate : 4.0}
                readonly={true}
                fractions={2}
                emptySymbol={<AiOutlineStar></AiOutlineStar>}
                fullSymbol={<AiFillStar></AiFillStar>}
                disabled={true}
              ></Rating>
              <div className={classes.Detail}>
                <div>
                  <p>Length</p>
                  <p>{`${movie.runtime}min`}</p>
                </div>
                <div>
                  <p>Language</p>
                  <p>{movie.spoken_languages[0].name}</p>
                </div>
                <div>
                  <p>Year</p>
                  <p>{movie.release_date.slice(0, 4)}</p>
                </div>
                <div>
                  <p>Status</p>
                  <p>{movie.status}</p>
                </div>
              </div>
              <div className={classes.genretext}>Genres</div>
              <div className={classes.genres}>
                {" "}
                {movie.genres.map((el, i) => {
                  return <Genre key={i} text={el.name}></Genre>;
                })}
              </div>
            </div>
            <p className={classes.synopsis}>Synopsis</p>
            <p className={classes.overview}>{movie.overview}</p>
            <p className={classes.cast}>Casts</p>
            <div className={classes.Names}>
              {" "}
              {cast
                ? cast.cast.map((el) => {
                    return <Cast key={el.id} name={el.name}></Cast>;
                  })
                : null}
            </div>

            <div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.Spinner}>
          <Spinner></Spinner>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { id: state.id };
};

export default connect(mapStateToProps)(MovieDetails);
