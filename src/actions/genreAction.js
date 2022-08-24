import axios from "axios";
import * as actions from "../actions/actionTypes";

const apiEndPoint = process.env.REACT_APP_API_URL + "genres";

export const getAllGenres = () => (dispatch) => {
  axios.get(apiEndPoint).then((responce) => {
    dispatch({
      type: actions.GET_ALL_GENRES,
      payload: { genres: responce.data },
    });
  });
};

export const deleteGenre = (id, navigate) => (dispatch, getState) => {
  axios
    .delete(apiEndPoint + "/" + id, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((responce) =>
      dispatch({
        type: actions.DELETE_GENRE,
        payload: { genre: responce.data },
      })
    )
    .catch((err) => navigate("/error"));
};

export const addGenre = (genre, navigate) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, genre, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((responce) =>
      dispatch({
        type: actions.ADD_GENRE,
        payload: { genre: responce.data },
      })
    )
    .catch((err) => navigate("/error"));
};

export const updateGenre = (genre, navigate) => (dispatch, getState) => {
  axios
    .put(apiEndPoint + "/" + genre._id, genre, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((responce) =>
      dispatch({
        type: actions.UPDATE_GENRE,
        payload: { genre: responce.data },
      })
    )
    .catch((err) => navigate("/error"));
};
