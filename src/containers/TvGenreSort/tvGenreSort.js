import React from "react";
import { connect } from "react-redux";
import SeriesSortTemplate from "../SeriesSort/seriesSortTemplate";
const TVGenreSort = (props) => {
  return (
    <SeriesSortTemplate
      link={`https://api.themoviedb.org/3/discover/tv?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=${props.pageNo}&with_genres=${props.activeGenre.id}`}
      heading={props.activeGenre.name}
    ></SeriesSortTemplate>
  );
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.currentGenre,
    pageNo: state.currentPage,
  };
};

export default connect(mapStateToProps)(TVGenreSort);
