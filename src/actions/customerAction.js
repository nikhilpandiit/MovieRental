import axios from "axios";
import * as actions from "../actions/actionTypes";

const apiEndPoint = process.env.REACT_APP_API_URL + "customers";

export const getAllCustomers = () => (dispatch) => {
  axios.get(apiEndPoint).then((responce) => {
    dispatch({
      type: actions.GET_ALL_CUSTOMERS,
      payload: { customers: responce.data },
    });
  });
};

export const deleteCustomer = (id) => (dispatch, getState) => {
  axios
    .delete(apiEndPoint + "/" + id, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((responce) =>
      dispatch({
        type: actions.DELETE_CUSTOMER,
        payload: { customer: responce.data },
      })
    );
};

export const addCustomer = (customer) => (dispatch, getState) => {
  axios
    .post(apiEndPoint, customer, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((responce) =>
      dispatch({
        type: actions.ADD_CUSTOMER,
        payload: { customer: responce.data },
      })
    )
    .catch((err) => console.log(err.message));
};

export const updateCustomer = (customer) => (dispatch, getState) => {
  axios
    .put(apiEndPoint + "/" + customer._id, customer, {
      headers: { "x-auth-token": getState().loginReducer.token },
    })
    .then((responce) =>
      dispatch({
        type: actions.UPDATE_CUSTOMER,
        payload: { customer: responce.data },
      })
    )
    .catch((err) => console.log(err.message));
};
