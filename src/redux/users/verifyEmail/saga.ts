import { call, put, takeEvery } from 'redux-saga/effects';
import { verifyEmail } from '../../../api/user';
import IdAndSignal from '../../../interfaces/commons/IdAndSignal';
import { VERIFY_EMAIL_REQUEST, verifyEmailSuccessAction } from './actions';

function* verifyEmailWorker({
  payload,
}: {
  payload: IdAndSignal;
  type: string;
}) {
  try {
    const verify: boolean = yield call(verifyEmail, payload);
    yield put(verifyEmailSuccessAction());
  } catch (e) {
    console.log(e);
  }
}

export default function* verifyEmailSaga() {
  yield takeEvery(VERIFY_EMAIL_REQUEST, verifyEmailWorker);
}
