import * as actions from "../actions/actionTypes";

let userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actions.REGISTER_USER:
      return { users: [...state.users, action.payload.users] };
    default:
      return state;
  }
};
export default userReducer;
