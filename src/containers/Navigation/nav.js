import React from "react";
import classes from "./nav.module.css";
import IconNavTv from "../../components/icons/IconCategoryTv";
import IconNavMovie from "../../components/icons/IconCategoryMovie";
import AppIcon from "../../components/icons/AppIcon";
import WorkingApp from "../../components/icons/WorkingAppIcon";
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
const nav = (props) => {
  return (
    <div className={classes.Container}>
      <div className={classes.Wrap}>
        <div className={classes.icons}>
          <AppIcon></AppIcon>
        </div>
        <Link to={"/"} className={classes.icons}>
          <WorkingApp fill={classes.Fill}></WorkingApp>
        </Link>

        <Link to={"/movie-genres"} className={classes.icons}>
          <IconNavMovie
            fill={classes.Fill}
            width={"2rem"}
            height={"2rem"}
          ></IconNavMovie>
        </Link>
        <Link to={"/tv-genres"} className={classes.icons}>
          <IconNavTv fill={classes.Fill} width={"2rem"}></IconNavTv>
        </Link>
        <img
          src="assets/image-avatar.png"
          style={{ width: "3rem", height: "3rem", padding: "0" ,alignSelf:"center"}}
        ></img>
      </div>
    </div>
  );
};

export default nav;
