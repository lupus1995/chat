import { call, put, takeEvery } from 'redux-saga/effects';
import { verifyEmail } from '../../api/user';
import IdAndSignal from '../../interfaces/commons/IdAndSignal';
import { verifyEmailSuccess, VERIFY_EMAIL_REQUEST } from './actions';

function* verifyEmailWorker({
  payload,
}: {
  payload: IdAndSignal;
  type: string;
}) {
  try {
    const verify: boolean = yield call(verifyEmail, payload);
    yield put(verifyEmailSuccess());
  } catch (e) {
    console.log(e);
  }
}

export default function* verifyEmailSaga() {
  yield takeEvery(VERIFY_EMAIL_REQUEST, verifyEmailWorker);
}
