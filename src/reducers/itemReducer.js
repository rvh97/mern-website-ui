import uuid from 'uuid';
import { GET_ITEMS, DELETE_ITEM, ADD_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'An item' },
    { id: uuid(), name: 'Another item' },
    { id: uuid(), name: 'One more item' },
    { id: uuid(), name: 'Last item' }
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    default:
      return state;
  }
}