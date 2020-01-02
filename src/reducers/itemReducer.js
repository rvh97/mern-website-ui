import uuid from 'uuid';
import { GET_ITEMS } from '../actions/types';

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
    default:
      return state;
  }
}