import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, LOADING_ITEMS } from './types';

const route = '/item';

export const getItems = () => dispatch => {
  dispatch(setLoadingItems);
  axios
    .get(route)
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    );
};

export const addItem = item => dispatch => {
  axios
    .post(route, item)
    .then(res => dispatch({
      type: ADD_ITEM,
      payload: res.data
    }));
};

export const deleteItem = id => dispatch => {
  axios
    .delete(`${route}/${id}`)
    .then(res => dispatch({
      type: DELETE_ITEM,
      payload: id
    }));
};

export const setLoadingItems = () => {
  return {
    type: LOADING_ITEMS
  };
};
