import Messages from '../../interfaces/messages/Messages';
import ActionInterface from '../../interfaces/reducer/Action';
import {
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_ERROR,
  CREATE_MESSAGE_SUCCESS,
  EDIT_MESSAGE_ERROR,
  EDIT_MESSAGE_REQUEST,
  EDIT_MESSAGE_SUCCESS,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_ERROR,
} from './action';

export interface MessagesReducerInterface {
  fetchData: {
    getMessagesRequest: boolean;
    getMessagesSuccess: boolean;
    getMessagesError: boolean;

    createMessageRequest: boolean;
    createMessageSuccess: boolean;
    createMessageError: boolean;

    editMessageRequest: boolean;
    editMessageSuccess: boolean;
    editMessageError: boolean;

    deleteMessageRequest: boolean;
    deleteMessageSuccess: boolean;
    deleteMessageError: boolean;
  };
  messages: Messages[];
}

const initState: MessagesReducerInterface = {
  fetchData: {
    getMessagesRequest: false,
    getMessagesSuccess: false,
    getMessagesError: false,

    createMessageRequest: false,
    createMessageSuccess: false,
    createMessageError: false,

    editMessageRequest: false,
    editMessageSuccess: false,
    editMessageError: false,

    deleteMessageRequest: false,
    deleteMessageSuccess: false,
    deleteMessageError: false,
  },
  messages: [],
};

export function messagesReducer(
  state = initState,
  action: ActionInterface,
): MessagesReducerInterface {
  const { type, payload } = action;

  switch (type) {
    // получение сообщения
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

    // создание сообщения
    case CREATE_MESSAGE_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createMessageRequest: true,
          createMessageSuccess: false,
          createMessageError: false,
        },
      };
    }

    case CREATE_MESSAGE_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createMessageRequest: false,
          createMessageSuccess: true,
          createMessageError: false,
        },
      };
    }

    case CREATE_MESSAGE_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createMessageRequest: false,
          createMessageSuccess: false,
          createMessageError: true,
        },
      };
    }

    // редактирование сообщения
    case EDIT_MESSAGE_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          editMessageRequest: true,
          editMessageSuccess: false,
          editMessageError: false,
        },
      };
    }

    case EDIT_MESSAGE_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          editMessageRequest: false,
          editMessageSuccess: true,
          editMessageError: false,
        },
      };
    }

    case EDIT_MESSAGE_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          editMessageRequest: false,
          editMessageSuccess: false,
          editMessageError: true,
        },
      };
    }

    // удаление сообщения
    case DELETE_MESSAGE_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          deleteMessageRequest: true,
          deleteMessageSuccess: false,
          deleteMessageError: false,
        },
      };
    }

    case DELETE_MESSAGE_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          deleteMessageRequest: false,
          deleteMessageSuccess: true,
          deleteMessageError: false,
        },
      };
    }

    case DELETE_MESSAGE_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          deleteMessageRequest: false,
          deleteMessageSuccess: false,
          deleteMessageError: true,
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
