import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setGenre } from "../../containers/store/actions";
import classes from "./genreCard.module.css";

const GenreCard = (props) => {
 
  return (
    <div
      className={classes.Container}
      style={{ backgroundColor: props.backgroundColor }}
      onClick={() => {
        return props.onSetGenre(props.activegenre);
      }}
    >
      <p className={classes.Text}>{props.genre}</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentGenre: state.currentGenre,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSetGenre: (genre) => dispatch(setGenre(genre)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GenreCard);
