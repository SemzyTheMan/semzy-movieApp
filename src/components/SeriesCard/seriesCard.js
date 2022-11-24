import React from "react";
import classes from "./seriesCard.module.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import IconCategoryTv from "../icons/IconCategoryTv";
import { getId } from "../../containers/store/actions";

const SeriesCard = (props) => {
  return (
    <div
      onClick={() => {
        console.log("i was clicked");
        console.log(props.id);
        localStorage.setItem("id", JSON.stringify(props.identity));
        return props.onGetElementId(props.identity);
      }}
    >
      {" "}
      <Link to={"/series-details"} className={classes.Container}>
        <div
          className={classes.Img}
          style={{ backgroundImage: `url(${props.backgroundImage})` }}
        ></div>
        <div className={classes.Year}>
          <span className={classes.years}>{props.year}</span>
          <div className={classes.Icon}>
            {" "}
            <IconCategoryTv width="1.5rem"></IconCategoryTv>
          </div>

          <span className={classes.PG}>PG</span>
        </div>
        <h2 className={classes.Title}>{props.title}</h2>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { id: state.id };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetElementId: (id) => dispatch(getId(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SeriesCard);
