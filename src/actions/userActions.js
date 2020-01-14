import { GET_USER, LOADING_USER, CLEAR_USER } from "./types";
import Axios from "axios";

const route = "/user";
const STATUS_NOT_AUTHORIZED = 403;

export const getUser = () => dispatch => {
  dispatch(setLoadingUser());
  Axios.get(route)
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

const setLoadingUser = () => ({
  type: LOADING_USER
});

const clearUser = () => ({
  type: CLEAR_USER
});
