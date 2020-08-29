import { takeEvery, put } from 'redux-saga/effects';
import { GET_USERS_REQUESTS, getUsersSuccess, getUsersError } from './actions';
import { getUsers } from '../../api/users';
import 'regenerator-runtime/runtime';
import { Users } from '../../interfaces/users/Users';

function* getUsersWorker({ payload }: { payload: AbortSignal; type: string }) {
  try {
    const users: Users[] = yield getUsers(payload);
    yield put(getUsersSuccess(users));
  } catch (e) {
    console.log(e);
    yield put(getUsersError());
  }
}

export function* usersSaga() {
  yield takeEvery(GET_USERS_REQUESTS, getUsersWorker);
}
