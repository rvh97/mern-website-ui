import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";

export default combineReducers({
  item: itemReducer,
  error: errorReducer,
  user: userReducer
});
