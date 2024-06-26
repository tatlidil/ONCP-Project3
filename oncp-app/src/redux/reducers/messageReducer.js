import { GET_MESSAGES, SEND_MESSAGE } from '../types';

const initialState = {
  messages: [],
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}