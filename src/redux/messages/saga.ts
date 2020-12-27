import { put, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import {
  createMessageError,
  createMessageSuccess,
  CREATE_MESSAGE_REQUEST,
  deleteMessageError,
  deleteMessageSuccess,
  DELETE_MESSAGE_REQUEST,
  editMessageError,
  editMessageSuccess,
  EDIT_MESSAGE_REQUEST,
  getMessagesError,
  getMessagesSuccess,
  GET_MESSAGES_REQUEST,
} from './action';
import {
  createMessage,
  deleteMessage,
  editMessage,
  getMessages,
} from '../../api/messages';
import MessagesInterface from '../../interfaces/messages/Messages';
import IdAndSignal from '../../interfaces/commons/IdAndSignal';
import CreateMessageRequestInterface from '../../interfaces/messages/CreateMessageRequestInterface';
import SignalInterface from '../../interfaces/reducer/Signal';
import EditMessageRequestInterface from '../../interfaces/messages/EditMessageRequestInterface';

function* getMessagesWorker({
  payload,
}: {
  payload: IdAndSignal;
  type: string;
}) {
  try {
    const messages: MessagesInterface[] = yield getMessages(payload);
    yield put(getMessagesSuccess(messages));
  } catch (e) {
    console.log(e);
    yield put(getMessagesError());
  }
}

function* createMessageWorker({
  payload,
}: {
  payload: CreateMessageRequestInterface & SignalInterface;
  type: string;
}) {
  try {
    const message: MessagesInterface = yield createMessage(payload);
    yield put(createMessageSuccess(message));
  } catch (e) {
    console.log(e);
    yield put(createMessageError());
  }
}

function* editMessageWorker({
  payload,
}: {
  payload: EditMessageRequestInterface & SignalInterface;
  type: string;
}) {
  try {
    const message: MessagesInterface = yield editMessage(payload);
    yield put(editMessageSuccess(message));
  } catch (e) {
    console.log(e);
    yield put(editMessageError());
  }
}

function* deleteMessageWorker({
  payload,
}: {
  payload: IdAndSignal;
  type: string;
}) {
  try {
    const deletedMessage = yield deleteMessage(payload);
    yield put(deleteMessageSuccess(deletedMessage));
  } catch (e) {
    console.log(e);
    yield put(deleteMessageError());
  }
}

export default function* messagesSaga() {
  yield takeEvery(GET_MESSAGES_REQUEST, getMessagesWorker);
  yield takeEvery(CREATE_MESSAGE_REQUEST, createMessageWorker);
  yield takeEvery(EDIT_MESSAGE_REQUEST, editMessageWorker);
  yield takeEvery(DELETE_MESSAGE_REQUEST, deleteMessageWorker);
}
