import { combineReducers } from "redux";
import genreReducer from "./genreReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import movieReducer from "./movieReducer";
import customerReducer from "./customerReducer";

export default combineReducers({
  genreReducer,
  userReducer,
  loginReducer,
  movieReducer,
  customerReducer,
});
