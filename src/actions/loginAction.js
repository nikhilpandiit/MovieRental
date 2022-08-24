import axios from "axios";
import * as actions from "./actionTypes";

const apiEndPoint = process.env.REACT_APP_API_URL + "logins";

export const loginUser = (user, navigate) => (dispatch) => {
  axios
    .post(apiEndPoint, user)
    .then((responce) =>{
    sessionStorage.setItem("token", responce.user);
      dispatch({
        type: actions.LOGIN_USER,
        payload: {
          token: responce.data,
        },
      })}
    )
    .catch(() => navigate("/error"));
};

export const loadLogin =()=>({
  type: actions.LOGIN_USER,
  payload:{
    token: sessionStorage.getItem("token"),
  },

})