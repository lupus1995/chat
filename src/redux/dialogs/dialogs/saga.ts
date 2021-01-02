import { takeEvery, put } from 'redux-saga/effects';
import _ from 'lodash';
import {
  createDialog,
  deleteDialog,
  editDialog,
  getDialogs,
} from '../../../api/dialogs';
import 'regenerator-runtime/runtime';
import {
  GET_DIALOGS_REQUESTS,
  getDialogsSuccess,
  getDialogsError,
  СREATE_DIALOG_REQUESTS,
  createDialogError,
  createDialogSuccess,
  EDIT_DIALOG_REQUESTS,
  editDialogError,
  editDialogSuccess,
  DELETE_DIALOG_REQUESTS,
  deleteDialogError,
  deleteDialogSuccess,
} from './actions';
import Dialogs from '../../../interfaces/dialogs/Dialogs';
import IdAndSignal from '../../../interfaces/commons/IdAndSignal';
import CreateRequestDialogInterface from '../../../interfaces/dialogs/CreateRequestDialogInterface';
import SignalInterface from '../../../interfaces/reducer/Signal';
import Dialog from '../../../interfaces/dialogs/Dialog';
import EditRequestDialogInterface from '../../../interfaces/dialogs/EditRequestDialogInterface';

function* getDialogsWorker({
  payload,
}: {
  payload: IdAndSignal;
  type: string;
}) {
  try {
    const dialogs: Dialogs[] = yield getDialogs(payload);
    yield put(getDialogsSuccess(dialogs));
  } catch (e) {
    console.log(e);
    yield put(getDialogsError());
  }
}

function* createDialogWorker({
  payload,
}: {
  payload: CreateRequestDialogInterface & SignalInterface;
  type: string;
}) {
  try {
    const dialog: Dialog = yield createDialog(payload);
    yield put(createDialogSuccess(dialog));
  } catch (e) {
    yield put(createDialogError());
    console.log(e);
  }
}

function* editDialogWorker({
  payload,
}: {
  payload: EditRequestDialogInterface & SignalInterface;
  type: string;
}) {
  try {
    const dialog: Dialog = yield editDialog(payload);
    yield put(editDialogSuccess(dialog));
  } catch (e) {
    console.log(e);
    yield put(editDialogError());
  }
}

function* deleteDialogWorker({
  payload,
}: {
  payload: IdAndSignal;
  type: string;
}) {
  try {
    const deletedDialog = yield deleteDialog(payload);
    yield put(deleteDialogSuccess(deletedDialog));
  } catch (e) {
    console.log(e);
    yield put(deleteDialogError());
  }
}

export default function* dialogsSaga() {
  yield takeEvery(GET_DIALOGS_REQUESTS, getDialogsWorker);
  yield takeEvery(СREATE_DIALOG_REQUESTS, createDialogWorker);
  yield takeEvery(EDIT_DIALOG_REQUESTS, editDialogWorker);
  yield takeEvery(DELETE_DIALOG_REQUESTS, deleteDialogWorker);
}
