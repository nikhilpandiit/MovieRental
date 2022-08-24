import * as actions from "../actions/actionTypes";

let movieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case actions.GET_ALL_MOVIES:
      return { movies: action.payload.movies };

    case actions.DELETE_MOVIE:
      let newMovies = state.movies.filter(
        (movieObj) => movieObj._id !== action.payload.movie._id
      );

      return { movies: newMovies };

    case actions.ADD_MOVIE:
      return { movies: [...state.movies, action.payload.movie] };

    case actions.UPDATE_MOVIE:
      const index = state.movies.findIndex(
        (movie) => movie._id === action.payload.movie._id
      );

      let updateMovie = [...state.movies];
      updateMovie[index] = action.payload.movie;
      return { movies: updateMovie };

    default:
      return state;
  }
};
export default movieReducer;
