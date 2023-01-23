import React from "react";
import classes from "./seriesTrend.module.css";
import IconCategoryMovie from "../icons/IconCategoryMovie";
import { connect } from "react-redux";
import IconCategoryTv from "../icons/IconCategoryTv";
import { getId } from "../../containers/store/actions";
import { Link } from "react-router-dom";
const SeriesTrendCard = (props) => {
  return (
    <div
      onClick={() => {
        localStorage.setItem("id", JSON.stringify(props.identity));
        return props.onGetElementId(props.identity);
      }}
      t
    >
      <Link
        to={"/series-details"}
        className={classes.Container}
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={classes.Wrap}>
          <div>
            <span className={classes.year}>2022</span>
            <div className={classes.span}>
              <span>
                {props.tv ? (
                  <IconCategoryTv width={"1.5rem"}></IconCategoryTv>
                ) : (
                  <IconCategoryMovie width={"1.5rem"}></IconCategoryMovie>
                )}
              </span>
              <span>{props.type}</span>
              <span>PG</span>
            </div>
          </div>
          <h1 className={classes.h1}>{props.title}</h1>
          <div className={classes.Save}></div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SeriesTrendCard);
