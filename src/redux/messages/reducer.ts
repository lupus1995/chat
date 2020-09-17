import Messages from '../../interfaces/messages/Messages';
import ActionInterface from '../../interfaces/reducer/Action';
import {
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
} from './action';

export interface MessagesReducerInterface {
  fetchData: {
    getMessagesRequest: boolean;
    getMessagesSuccess: boolean;
    getMessagesError: boolean;
  };
  messages: Messages[];
}

const initState: MessagesReducerInterface = {
  fetchData: {
    getMessagesRequest: false,
    getMessagesSuccess: false,
    getMessagesError: false,
  },
  messages: [],
};

export function messagesReducer(state = initState, action: ActionInterface) {
  const { type, payload } = action;

  switch (type) {
    case GET_MESSAGES_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getMessagesRequest: true,
          getMessagesSuccess: false,
          getMessagesError: false,
        },
      };
    }
    case GET_MESSAGES_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getMessagesRequest: false,
          getMessagesSuccess: true,
          getMessagesError: false,
        },
        messages: [...state.messages, ...payload],
      };
    }
    case GET_MESSAGES_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getMessagesRequest: false,
          getMessagesSuccess: false,
          getMessagesError: true,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
