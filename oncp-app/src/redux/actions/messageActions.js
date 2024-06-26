import axios from 'axios';
import { GET_MESSAGES, SEND_MESSAGE, MESSAGE_ERROR } from '../types';

// Get messages
export const getMessages = () => async dispatch => {
  try {
    const res = await axios.get('/api/messages');
    dispatch({
      type: GET_MESSAGES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Send message
export const sendMessage = (text) => async dispatch => {
  try {
    const res = await axios.post('/api/messages', { text });
    dispatch({
      type: SEND_MESSAGE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: MESSAGE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};