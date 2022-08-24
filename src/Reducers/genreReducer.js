import * as actions from "../actions/actionTypes";

let genreReducer = (state = { genres: [] }, action) => {
  switch (action.type) {
    case actions.GET_ALL_GENRES:
      return { genres: action.payload.genres };

    case actions.DELETE_GENRE:
      let newGenres = state.genres.filter(
        (genobj) => genobj._id !== action.payload.genre._id
      );
      return { genres: newGenres };

    case actions.ADD_GENRE:
      return { genres: [...state.genres, action.payload.genre] };

    case actions.UPDATE_GENRE:
      const index = state.genres.findIndex(
        (genre) => genre._id === action.payload.genre._id
      );
      let updateGenre = [...state.genres];
      updateGenre[index] = action.payload.genre;
      return { genres: updateGenre };

    default:
      return state;
  }
};
export default genreReducer;
