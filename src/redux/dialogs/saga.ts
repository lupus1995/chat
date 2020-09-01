import { takeEvery, put } from 'redux-saga/effects';
import { getDialogs } from '../../api/dialogs';
import 'regenerator-runtime/runtime';
import {
  GET_DIALOGS_REQUESTS,
  getDialogsSuccess,
  getDialogsError,
} from './actions';
import Dialogs from '../../interfaces/dialogs/Dialogs';
import _ from 'lodash';

function* getDialogsWorker({
  payload,
}: {
  payload: AbortSignal;
  type: string;
}) {
  try {
    const dialogs: Dialogs[] = yield getDialogs(payload);
    const newDialogs = _.sortBy(
      dialogs,
      (dialog: Dialogs) => new Date(dialog.messages[0].createdAt),
    ).reverse();
    yield put(getDialogsSuccess(newDialogs));
  } catch (e) {
    console.log(e);
    yield put(getDialogsError());
  }
}

export function* dialogsSaga() {
  yield takeEvery(GET_DIALOGS_REQUESTS, getDialogsWorker);
}
