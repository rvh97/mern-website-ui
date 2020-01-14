import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  msg: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        msg: action.payload
      };
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
}
