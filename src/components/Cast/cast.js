import React from "react";
import classes from "./cast.module.css";
const Cast = (props) => {
  return (
    <div className={classes.Container}>
          <p className={classes.Name}>{ props.name}</p>
    </div>
  );
};

export default Cast;
