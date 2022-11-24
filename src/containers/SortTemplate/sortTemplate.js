import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import MoviesCard from "../../components/MoviesCard/moviesCard";
import classes from "./sortTemplate.module.css";
import Spinner from "../../components/Spinner/spinner";
import { nextPage, prevPage } from "../store/actions";
const SortTemplate = (props) => {
  const [currentGenre, setCurrentGenre] = useState(null);

  useEffect(() => {
    fetch(props.link)
      //https://api.themoviedb.org/3/discover/movie?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=1&with_genres=action
      .then((response) => {
        console.log(response.json);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCurrentGenre(data);
      });
  }, [props.pageNo, props.searchValue]);

  return (
    <div className={classes.Wrap}>
      <h1 className={classes.Main}>{props.heading}</h1>

      <div className={classes.Container}>
        {currentGenre ? (
          currentGenre.results.map((el) => {
            return (
              <div>
                <MoviesCard
                  identity={el.id}
                  key={el.id}
                  title={el.title ? el.title.trimStart() : el.name.trimStart()}
                  year={
                    el.release_date
                      ? el?.release_date?.slice(0, 4)
                      : el?.first_air_date?.slice(0, 4)
                  }
                  backgroundImage={
                    el.backdrop_path
                      ? "http://image.tmdb.org/t/p/w500" + el.backdrop_path
                      : null
                  }
                ></MoviesCard>
              </div>
            );
          })
        ) : (
          <div className={classes.Spinner}>
            <Spinner></Spinner>
          </div>
        )}
      </div>
      {currentGenre ? (
        <div className={classes.Pagination}>
          <p
            className={props.pageNo === 1 ? classes.Prev : classes.PrevActive}
            onClick={() => {
              {
                props.pageNo > 1 ? props.onDecreasePageNo() : console.log();
              }
            }}
          >
            Prev
          </p>
          <p className={classes.Page}>
            Page {currentGenre.page} of {currentGenre.total_pages}
          </p>
          <p
            className={classes.Next}
            onClick={() => {
              props.onIncreasePageNo();
            }}
          >
            Next
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activeGenre: state.currentGenre,
    pageNo: state.currentPage,
    searchValue: state.searchValue,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIncreasePageNo: () => dispatch(nextPage()),
    onDecreasePageNo: () => dispatch(prevPage()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SortTemplate);
