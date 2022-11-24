import React from "react";

import classes from "./spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={classes.Container}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Spinner;
