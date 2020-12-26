import { takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import { GET_MESSAGES_REQUEST } from './action';
import getMessages from '../../api/messages';
import MessagesInterface from '../../interfaces/messages/Messages';

function* getMessagesWorker({
  payload,
}: {
  payload: AbortSignal;
  type: string;
}) {
  try {
    const messages: MessagesInterface[] = yield getMessages({
      signal: payload,
    });
    console.log(messages);
  } catch (e) {
    console.log(e);
  }
}

export default function* messagesSaga() {
  yield takeEvery(GET_MESSAGES_REQUEST, getMessagesWorker);
}
