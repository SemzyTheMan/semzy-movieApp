import React, { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import MoviesCard from "../../components/MoviesCard/moviesCard";
import classes from "./searchResult.module.css";
import Spinner from "../../components/Spinner/spinner";
import { prevPage, nextPage } from "../store/actions";
const SearchResults = (props) => {
  const [results, setResults] = useState(null);
  let [timer, setTimer] = useState(8);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=45078ff0ca2e11b5c99a758170885e75&query=${props.searchValue.SearchValue}&page=${props.pageNo}`
    )
      //https://api.themoviedb.org/3/discover/movie?api_key=45078ff0ca2e11b5c99a758170885e75&language=en-US&page=1&with_genres=action
      .then((response) => {
        console.log(response.json);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setResults(data);
      });
  }, [props.pageNo, props.searchValue]);

  const droptime = () => {
    if (timer > 0) {
      timer = timer - 1;
      setTimer(timer);
    } else {
      timer = 0;
      setTimer(timer);
    }
    // console.log(timer);
  };
  const reduceTime = setInterval(droptime, 1000);
  if (timer === 0) {
    clearInterval(reduceTime);
  }
  useEffect(() => {
    console.log(timer);
  }, [timer]);

  let page = (
    <div className={classes.demoContainer}>
      <Spinner></Spinner>
    </div>
  );

  if (results) {
    if (results.total_results < 1 && timer === 0) {
      page = (
        <div className={classes.demoContainer}>
          <p>{`Found ${results.total_results} results for '${props.searchValue.SearchValue}'`}</p>
        </div>
      );
    } else if (results.total_results > 0) {
      page = (
        <div className={classes.Wrap}>
          <h1
            className={classes.Main}
          >{`Found ${results.total_results} results for '${props.searchValue.SearchValue}'`}</h1>

          <div className={classes.Container}>
            {results.results.map((el) => {
              return (
                <div>
                  <MoviesCard
                    identity={el.id}
                    key={el.id}
                    title={
                      el.title ? el.title.trimStart() : el.name.trimStart()
                    }
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
            })}
          </div>
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
              Page {results.page} of {results.total_pages}
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
        </div>
      );
    }
  }
  return <div>{page}</div>;
};
// };

// //https://api.themoviedb.org/3/search/props.searchValue.SearchValue?api_key=45078ff0ca2e11b5c99a758170885e75&page=1

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
// };
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
