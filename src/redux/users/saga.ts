import { put, takeEvery } from 'redux-saga/effects';
import { set } from 'local-storage';
import { ErrorResponse } from '../../interfaces/reducer/ErrorResponse';
import { auth, createUser } from '../../api/user';
import { CreateUserInterface } from '../../interfaces/users/CreateUserInterface';
import {
  authError,
  authSuccess,
  AUTH_REQUEST,
  createUserError,
  createUserSuccess,
  CREATE_USER_REQUEST,
} from './actions';
import { AuthUserRequestInterface } from '../../interfaces/users/AuthUserRequestInterface';

function* createUserWorker({
  payload,
}: {
  payload: CreateUserInterface;
  type: string;
}) {
  try {
    const user = yield createUser(payload);
    yield put(createUserSuccess());
  } catch (e) {
    const error: ErrorResponse = e;
    yield put(createUserError(error.message));
  }
}

function* authRequestWorker({
  payload,
}: {
  payload: AuthUserRequestInterface;
  type: string;
}) {
  try {
    const accessToken = yield auth(payload);
    set('accessToken', accessToken.accessToken);
    yield put(authSuccess(accessToken));
  } catch (e) {
    console.log(e);
    yield put(authError());
  }
}

export default function* userSaga() {
  yield takeEvery(CREATE_USER_REQUEST, createUserWorker);
  yield takeEvery(AUTH_REQUEST, authRequestWorker);
}
