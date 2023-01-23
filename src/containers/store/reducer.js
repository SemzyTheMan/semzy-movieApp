const initialState = {
  id: null,
  currentGenre: "",
  currentPage: 1,
  searchValue: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "GET_ID") {
    return { ...state, id: action.value };
  } else if (action.type === "SET_GENRE") {
    return { ...state, currentGenre: action.value };
  } else if (action.type === "NEXT_PAGE") {
    return { ...state, currentPage: state.currentPage + 1 };
  } else if (action.type === "PREV_PAGE") {
    return { ...state, currentPage: state.currentPage - 1 };
  } else if (action.type === "SEARCH") {
    return { ...state, searchValue: action.value };
  } else {
    return state;
  }
};
export default reducer;
