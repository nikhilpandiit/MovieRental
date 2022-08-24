import axios from "axios";
import * as actions from "../actions/actionTypes";

const apiEndPoint = process.env.REACT_APP_API_URL + "movies";

export const getAllMovies = () => (dispatch) => {
  axios.get(apiEndPoint).then((responce) => {
    dispatch({
      type: actions.GET_ALL_MOVIES,
      payload: { movies: responce.data },
    });
  });
};

export const deleteMovie = (id, navigate) => (dispatch, getState) => {
  axios
    .delete(apiEndPoint + "/" + id, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((responce) =>

      dispatch({
        type: actions.DELETE_MOVIE,
        payload: { movie: responce.data },
      })
    )
    .catch((err) => navigate("/error"));
};

export const addMovies = (movie, navigate) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, movie, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((responce) =>
      dispatch({
        type: actions.ADD_MOVIE,
        payload: { movie: responce.data },
      })
    )
    .catch((err) => navigate("/error"));
};

export const updateMovie = (movie, navigate) => (dispatch, getState) => {
  axios
    .put(apiEndPoint + "/" + movie._id, movie, {
      headers: { "x-auth-token": getState().loginReducer.token},
    })
    .then((responce) =>
      dispatch({
        type: actions.UPDATE_MOVIE,
        payload: { movie: responce.data },
      })
    )
    .catch((err) => navigate("/error"));
};
