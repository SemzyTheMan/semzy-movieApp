export const getId = (id) => {
  return {
    type: "GET_ID",
    value: id,
  };
};

export const setGenre = (genre) => {
  return {
    type: "SET_GENRE",
    value: genre,
  };
};
export const nextPage = () => {
  return {
    type: "NEXT_PAGE",
  };
};
export const prevPage = () => {
  return {
    type: "PREV_PAGE",
  };
};
export const searchMovie = (movie) => {
  return {
    type: "SEARCH",
    value: movie,
  
  };
};
