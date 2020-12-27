import IdAndSignal from '../../interfaces/commons/IdAndSignal';
import CreateMessageRequestInterface from '../../interfaces/messages/CreateMessageRequestInterface';
import EditMessageRequestInterface from '../../interfaces/messages/EditMessageRequestInterface';
import MessagesInterface from '../../interfaces/messages/Messages';
import ActionInterface from '../../interfaces/reducer/Action';
import SignalInterface from '../../interfaces/reducer/Signal';
import TypeInterface from '../../interfaces/reducer/Type';

export const GET_MESSAGES_REQUEST = '@messages/GET_MESSAGES_REQUEST';
export const GET_MESSAGES_SUCCESS = '@messages/GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_ERROR = '@messages/GET_MESSAGES_ERROR';

export const CREATE_MESSAGE_REQUEST = '@messages/CREATE_MESSAGE_REQUEST';
export const CREATE_MESSAGE_SUCCESS = '@messages/CREATE_MESSAGE_SUCCESS';
export const CREATE_MESSAGE_ERROR = '@messages/CREATE_MESSAGE_ERROR';

export const EDIT_MESSAGE_REQUEST = '@messages/CREATE_MESSAGE_REQUEST';
export const EDIT_MESSAGE_SUCCESS = '@messages/CREATE_MESSAGE_SUCCESS';
export const EDIT_MESSAGE_ERROR = '@messages/CREATE_MESSAGE_ERROR';

export const DELETE_MESSAGE_REQUEST = '@messages/CREATE_MESSAGE_REQUEST';
export const DELETE_MESSAGE_SUCCESS = '@messages/CREATE_MESSAGE_SUCCESS';
export const DELETE_MESSAGE_ERROR = '@messages/CREATE_MESSAGE_ERROR';

// получение сообщений
export const getMessagesRequest = (payload: IdAndSignal): ActionInterface => ({
  type: GET_MESSAGES_REQUEST,
  payload,
});

export const getMessagesSuccess = (
  payload: MessagesInterface[],
): ActionInterface => ({
  type: GET_MESSAGES_SUCCESS,
  payload,
});

export const getMessagesError = (): TypeInterface => ({
  type: GET_MESSAGES_ERROR,
});

// создание сообщений
export const createMessageRequest = (
  payload: CreateMessageRequestInterface & SignalInterface,
): ActionInterface => ({
  type: CREATE_MESSAGE_REQUEST,
  payload,
});

export const createMessageSuccess = (
  payload: MessagesInterface,
): ActionInterface => ({
  type: CREATE_MESSAGE_SUCCESS,
  payload,
});

export const createMessageError = (): TypeInterface => ({
  type: CREATE_MESSAGE_ERROR,
});

// редактирование сообщения
export const editMessageRequest = (
  payload: EditMessageRequestInterface & SignalInterface,
): ActionInterface => ({
  type: EDIT_MESSAGE_REQUEST,
  payload,
});

export const editMessageSuccess = (
  payload: MessagesInterface,
): ActionInterface => ({
  type: EDIT_MESSAGE_SUCCESS,
  payload,
});

export const editMessageError = (): TypeInterface => ({
  type: EDIT_MESSAGE_ERROR,
});

// удаление сообщения
export const deleteMessageRequest = (
  payload: IdAndSignal,
): ActionInterface => ({
  type: DELETE_MESSAGE_REQUEST,
  payload,
});

export const deleteMessageSuccess = (
  payload: MessagesInterface,
): ActionInterface => ({
  type: DELETE_MESSAGE_SUCCESS,
  payload,
});

export const deleteMessageError = (): TypeInterface => ({
  type: DELETE_MESSAGE_ERROR,
});
