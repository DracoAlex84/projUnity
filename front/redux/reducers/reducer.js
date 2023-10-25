import { combineReducers } from "redux";
import projectsReducer from "./projectsReducer";
import usersReducer from "./usersReducer";
import carritoReducer from "./carritoReducer";
import commentsReducer from "./commentsReducer";
import paymentReducer from "./paymentReducer";

export default combineReducers({
  projectsData: projectsReducer,
  carritoData: carritoReducer,
  usersData: usersReducer,
  commentData: commentsReducer,
  paymentData: paymentReducer,
});
