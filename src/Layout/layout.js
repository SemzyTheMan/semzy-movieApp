import React from "react";
import classes from "./layout.module.css";
import Nav from "../containers/Navigation/nav";
import Form from "../components/Form/Form";
import Trending from "../containers/Trending/Trending";
import NowPlaying from "../containers/NowPlaying/NowPlaying";
import Popular from "../containers/Popular/Popular";
import UpComing from "../containers/UpComing/upComing";
import TopRated from "../containers/TopRated/topRated";
import SeriesTrending from "../containers/Series/SeriesTrending/seriesTrending";
import SeriesPopular from "../containers/Series/SeriesPopular/seriesPopular";
import SeriesNowPlaying from "../containers/Series/SeriesNowplaying/seriesNowPlaying";
import SeriesUpComing from "../containers/Series/SeriesUpcoming/seriesUpcoming";
import SeriesTopRated from "../containers/Series/SeriesTopRated/seriesTopRated";
import MovieGenre from "../containers/MovieGenres/movieGenre";
import TvGenre from "../containers/TvGenres/tvGenre";
import MovieDetails from "../containers/MovieDetails/movieDetails";
import SeriesDetails from "../containers/SeriesDetails/seriesDetails";
import { Routes, Route } from "react-router-dom";
import GenreSort from "../containers/GenreSort/genreSort";
import SearchResults from "../containers/SearchResult/searchResult";
import TVGenreSort from "../containers/TvGenreSort/tvGenreSort";
const layout = (props) => {
  const home = (
    <div>
      <Trending></Trending>
      <Popular></Popular>
      <NowPlaying></NowPlaying>
      <UpComing></UpComing>
      <TopRated></TopRated>
      <SeriesTrending></SeriesTrending>
      <SeriesPopular></SeriesPopular>
      <SeriesNowPlaying></SeriesNowPlaying>
      <SeriesUpComing></SeriesUpComing>
      <SeriesTopRated></SeriesTopRated>
    </div>
  );

  return (
    <div className={classes.Container}>
      <Nav></Nav>
      <Form></Form>
      <Routes>
        <Route path="/" element={home}></Route>
        <Route path="/movie-genres" element={<MovieGenre></MovieGenre>}></Route>
        <Route path="/tv-genres" element={<TvGenre></TvGenre>}></Route>
        <Route path="/details" element={<MovieDetails></MovieDetails>}></Route>
        <Route
          path="/series-details"
          element={<SeriesDetails></SeriesDetails>}
        ></Route>
        <Route path="/genresort" element={<GenreSort></GenreSort>}></Route>
        <Route
          path="/results"
          element={<SearchResults></SearchResults>}
        ></Route>
        <Route
          path="/tvgenres-section"
          element={<TVGenreSort></TVGenreSort>}
        ></Route>
      </Routes>
      <p className={classes.Credits}>
        Coded by <span>Duke Of Suffolk.</span> UI design by{" "}
        <span>Frontend mentor</span>
      </p>
      <p className={classes.Credits}>Powered by</p>
      <img className={classes.TMDB} src="assets/icon-tmdb-long.svg"></img>
    </div>
  );
};
export default layout;
