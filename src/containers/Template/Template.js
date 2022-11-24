import React from "react";
import classes from "./Template.module.css";

const Template = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.TrendingText}>
        <h1>{props.Category}</h1>
        <p className={classes.wrapped}>{ props.tv?"SERIES":"MOVIES"}</p>
      </div>
    </div>
  );
};

export default Template;
