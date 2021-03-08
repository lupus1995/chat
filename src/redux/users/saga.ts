import { call, put, takeEvery } from 'redux-saga/effects';
import { set } from 'local-storage';
import { ErrorMessages } from '../../interfaces/reducer/ErrorMessages';

import { auth, createUser, verifyUserEmail } from '../../api/user';
import {
  authError,
  authRequest,
  authSuccess,
  AUTH_REQUEST,
  createUserError,
  createUserSuccess,
  CREATE_USER_REQUEST,
  getMembersError,
  getMembersSuccess,
  GET_MEMBERS_REQUEST,
  setUser,
  verifyEmailErrorAction,
  verifyEmailSuccessAction,
  VERIFY_EMAIL_REQUEST_ACTION,
} from './actions';
import IdAndSignal from '../../interfaces/commons/IdAndSignal';
import { getMembers } from '../../api/dialogs';
import { AuthUserRequestInterface } from '../../interfaces/users/auth/AuthUserRequestInterface';
import { CreateUserInterface } from '../../interfaces/users/create/CreateUserInterface';
import { UsersInterface } from '../../interfaces/users/UsersInterface';
import ErrorsResponseMessage from '../../interfaces/commons/ErrorsResponse';
import { ErrorResponse } from '../../interfaces/reducer/ErrorResponse';
import { AccessTokenInterface } from '../../interfaces/users/AccessTokenInterface';

function* createUserWorker({
  payload,
}: {
  payload: CreateUserInterface;
  type: string;
}) {
  try {
    const user: UsersInterface = yield call(createUser, payload);
    yield put(createUserSuccess(user));
  } catch (e) {
    const error: ErrorResponse = e;
    const errorMessages: ErrorsResponseMessage[] = error.message;
    let messages: ErrorMessages[] = [];

    errorMessages.forEach((item) => {
      const errorString: string[] = Object.values<string>(item.constraints);

      messages = [
        ...messages,
        {
          field: item.property,
          message: errorString,
        },
      ];
    });
    yield put(createUserError(messages));
  }
}

function* authRequestWorker({
  payload,
}: {
  payload: AuthUserRequestInterface;
  type: string;
}) {
  try {
    const accessToken: AccessTokenInterface = yield auth(payload);
    set('accessToken', accessToken.accessToken);
    yield put(authSuccess(accessToken));
  } catch (e) {
    yield put(authError());
  }
}

function* getMembersWorker({
  payload,
}: {
  payload: IdAndSignal;
  type: string;
}) {
  try {
    const members: UsersInterface[] = yield getMembers(payload);
    yield put(getMembersSuccess(members));
  } catch (e) {
    console.log(e);
    yield put(getMembersError());
  }
}

function* verifyEmailWorker({
  payload,
}: {
  payload: IdAndSignal;
  type: string;
}) {
  try {
    const user: UsersInterface = yield call(verifyUserEmail, payload);
    console.log('user', user);
    yield put(setUser(user));
    yield put(verifyEmailSuccessAction());
  } catch (e) {
    yield put(verifyEmailErrorAction());
  }
}

export default function* userSaga() {
  yield takeEvery(CREATE_USER_REQUEST, createUserWorker);
  yield takeEvery(AUTH_REQUEST, authRequestWorker);
  yield takeEvery(GET_MEMBERS_REQUEST, getMembersWorker);
  yield takeEvery(VERIFY_EMAIL_REQUEST_ACTION, verifyEmailWorker);
}
