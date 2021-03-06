import axios from "axios";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  LOADING_ITEMS,
  GET_ERRORS
} from "./types";

const route = "/item";

export const getItems = () => dispatch => {
  dispatch(setLoadingItems());
  axios.get(route).then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

const setLoadingItems = () => ({
  type: LOADING_ITEMS
});

export const addItem = item => dispatch => {
  axios
    .post(route, item)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.error
      })
    );
};

export const deleteItem = id => dispatch => {
  axios
    .delete(`${route}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.error
      })
    );
};
