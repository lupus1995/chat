import { takeEvery, put } from 'redux-saga/effects';
import { getTypes } from '../../../api/dialogs';
import { getTypesError, getTypesSuccess, GET_TYPES_REQUEST } from './actions';

function* getTypesWorker({ payload }: { payload: AbortSignal; type: string }) {
  try {
    const types: string[] = yield getTypes(payload);
    yield put(getTypesSuccess(types));
  } catch (e) {
    yield put(getTypesError());
  }
}
export default function* typesSaga() {
  yield takeEvery(GET_TYPES_REQUEST, getTypesWorker);
}
