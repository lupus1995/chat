import { call, put, takeEvery } from 'redux-saga/effects';
import { verifyUserEmail } from '../../../api/user';
import IdAndSignal from '../../../interfaces/commons/IdAndSignal';
import { UsersInterface } from '../../../interfaces/users/UsersInterface';
import { setUser } from '../users/actions';
import { VERIFY_EMAIL_REQUEST, verifyEmailSuccessAction } from './actions';

function* verifyEmailWorker({
  payload,
}: {
  payload: IdAndSignal;
  type: string;
}) {
  try {
    const user: UsersInterface = yield call(verifyUserEmail, payload);
    yield put(setUser(user));
    yield put(verifyEmailSuccessAction());
  } catch (e) {
    console.log(e);
  }
}

export default function* verifyEmailSaga() {
  yield takeEvery(VERIFY_EMAIL_REQUEST, verifyEmailWorker);
}
