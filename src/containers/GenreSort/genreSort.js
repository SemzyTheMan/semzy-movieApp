import React from "react";
import { connect } from "react-redux";
import SortTemplate from "../SortTemplate/sortTemplate";
const GenreSort = (props) => {
  return (
    <SortTemplate
      link={`https://api.themoviedb.org/3/discover/movie?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=${props.pageNo}&with_genres=${props.activeGenre.id}`}
      heading={props.activeGenre.name}
    ></SortTemplate>
  );
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.currentGenre,
    pageNo: state.currentPage,
  };
};

export default connect(mapStateToProps)(GenreSort);
