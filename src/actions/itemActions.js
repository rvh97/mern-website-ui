import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, LOADING_ITEMS } from './types';

export const getItems = () => dispatch => {
  dispatch(setLoadingItems);
  axios
    .get('/api/item')
    .then(res => 
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    );
};

export const addItem = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const setLoadingItems = () => {
  return {
    type: LOADING_ITEMS
  };
};
