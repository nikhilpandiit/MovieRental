import axios from "axios";
import * as actions from "./actionTypes";

const apiEndPoint = process.env.REACT_APP_API_URL + "users";
console.log(apiEndPoint);
export const registerUser = (user) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, user)
    .then((responce) =>
      dispatch({
        type: actions.REGISTER_USER,
        payload: {
          user: responce.data,
        },
      })
    )
    .catch((err) => console.log(err.message));
};
