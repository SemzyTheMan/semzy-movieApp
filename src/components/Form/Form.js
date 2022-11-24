import React from "react";
import classes from "./Form.module.css";
import IconSearch from "../icons/IconSearch";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { searchMovie } from "../../containers/store/actions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.onSearchMovie(data);
    navigate("/results");
  };

  useEffect(() => {
    console.log(props.searchValue);
    
  }, [props.searchValue]);
  return (
    <form className={classes.Container} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <IconSearch></IconSearch>
      </div>
      <input
        type={"text"}
        {...register("SearchValue")}
        placeholder={"Search for movies or Tvseries"}
      ></input>

      <button type="submit" className={classes.button}>
        Search
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchMovie: (movie) => dispatch(searchMovie(movie)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
