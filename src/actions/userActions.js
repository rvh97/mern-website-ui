import { GET_USER, LOADING_USER, CLEAR_USER, LOGOUT_USER } from "./types";
import axios from "axios";

const STATUS_NOT_AUTHORIZED = 403;

export const getUser = () => dispatch => {
  dispatch(setLoadingUser());
  axios
    .get("/user")
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === STATUS_NOT_AUTHORIZED) {
        dispatch(clearUser());
      } else {
        throw err;
      }
    });
};

export const logoutUser = () => dispatch => {
  axios.get("/auth/logout").then(res => {
    dispatch(clearUser());
  });
};

const setLoadingUser = () => ({
  type: LOADING_USER
});

const clearUser = () => ({
  type: CLEAR_USER
});
