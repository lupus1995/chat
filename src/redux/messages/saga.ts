import { RootReducerInterface } from './../../../root.reducer';
import { select, takeEvery } from 'redux-saga/effects';
import { GET_MESSAGES_REQUEST } from './action';
import { getMessages } from '../../api/messages';
import _ from 'lodash';
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
  } catch (e) {}
}

export function* messagesSaga() {
  yield takeEvery(GET_MESSAGES_REQUEST, getMessagesWorker);
}
