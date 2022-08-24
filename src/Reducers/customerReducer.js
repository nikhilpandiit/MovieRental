import * as actions from "../actions/actionTypes";

let customerReducer = (state = { customers: [] }, action) => {
  switch (action.type) {
    case actions.GET_ALL_CUSTOMERS:
      return { customers: action.payload.customers };

    case actions.DELETE_CUSTOMER:
      let newCustomer = state.customers.filter(
        (customerobj) => customerobj._id !== action.payload.customer._id
      );
      return { customers: newCustomer };

    case actions.ADD_CUSTOMER:
      return { customers: [...state.customers, action.payload.customer] };

    case actions.UPDATE_CUSTOMER:
      const index = state.customers.findIndex(
        (customer) => customer._id === action.payload.customer._id
      );
      let updateCustomer = [...state.customers];
      updateCustomer[index] = action.payload.customer;
      return { customers: updateCustomer };

    default:
      return state;
  }
};
export default customerReducer;
