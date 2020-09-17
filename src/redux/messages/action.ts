import Messages from '../../interfaces/messages/Messages';

export const GET_MESSAGES_REQUEST = '@messages/GET_MESSAGES_REQUEST';
export const GET_MESSAGES_SUCCESS = '@messages/GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_ERROR = '@messages/GET_MESSAGES_ERROR';

export const getMessagesRequest = (payload: AbortSignal) => ({
  type: GET_MESSAGES_REQUEST,
  payload,
});

export const getMessagesSuccess = (payload: Messages[]) => ({
  type: GET_MESSAGES_SUCCESS,
  payload,
});

export const getMessagesError = () => ({
  type: GET_MESSAGES_ERROR,
});
