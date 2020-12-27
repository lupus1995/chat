import IdAndSignal from '../../interfaces/commons/IdAndSignal';
import Dialog from '../../interfaces/dialogs/Dialog';
import Dialogs from '../../interfaces/dialogs/Dialogs';
import RequestDialog from '../../interfaces/dialogs/CreateRequestDialogInterface';
import ActionInterface from '../../interfaces/reducer/Action';
import SignalInterface from '../../interfaces/reducer/Signal';
import TypeInterface from '../../interfaces/reducer/Type';
import EditRequestDialogInterface from '../../interfaces/dialogs/EditRequestDialogInterface';

export const GET_DIALOGS_REQUESTS = '@users/GET_DIALOGS_REQUESTS';
export const GET_DIALOGS_SUCCESS = '@users/GET_DIALOGS_SUCCESS';
export const GET_DIALOGS_ERROR = '@users/GET_DIALOGS_ERROR';

export const СREATE_DIALOG_REQUESTS = '@users/СREATE_DIALOG_REQUESTS';
export const СREATE_DIALOG_SUCCESS = '@users/СREATE_DIALOG_SUCCESS';
export const СREATE_DIALOG_ERROR = '@users/СREATE_DIALOG_ERROR';

export const EDIT_DIALOG_REQUESTS = '@users/EDIT_DIALOG_REQUESTS';
export const EDIT_DIALOG_SUCCESS = '@users/EDIT_DIALOG_SUCCESS';
export const EDIT_DIALOG_ERROR = '@users/EDIT_DIALOG_ERROR';

export const DELETE_DIALOG_REQUESTS = '@users/EDIT_DIALOG_REQUESTS';
export const DELETE_DIALOG_SUCCESS = '@users/EDIT_DIALOG_SUCCESS';
export const DELETE_DIALOG_ERROR = '@users/EDIT_DIALOG_ERROR';

export const SET_SEARCH_INPUT_USERS = '@users/SET_SEARCH_INPUT_USERS';

// получение информации об диалогах
export const getDialogsRequest = (payload: IdAndSignal): ActionInterface => ({
  type: GET_DIALOGS_REQUESTS,
  payload,
});

export const getDialogsSuccess = (payload: Dialogs[]): ActionInterface => ({
  type: GET_DIALOGS_SUCCESS,
  payload,
});

export const getDialogsError = (): TypeInterface => ({
  type: GET_DIALOGS_ERROR,
});

// создание диалога
export const createDialogRequest = (
  payload: RequestDialog & SignalInterface,
): ActionInterface => ({
  type: СREATE_DIALOG_REQUESTS,
  payload,
});

export const createDialogSuccess = (payload: Dialog): ActionInterface => ({
  type: СREATE_DIALOG_SUCCESS,
  payload,
});

export const createDialogError = (): TypeInterface => ({
  type: СREATE_DIALOG_ERROR,
});

// редактирование диалога
export const editDialogRequest = (
  payload: EditRequestDialogInterface & SignalInterface,
): ActionInterface => ({
  type: EDIT_DIALOG_REQUESTS,
  payload,
});

export const editDialogSuccess = (payload: Dialog): ActionInterface => ({
  type: EDIT_DIALOG_SUCCESS,
  payload,
});

export const editDialogError = (): TypeInterface => ({
  type: EDIT_DIALOG_ERROR,
});

// удаление диалога
export const deleteDialogRequest = (payload: IdAndSignal): ActionInterface => ({
  type: DELETE_DIALOG_REQUESTS,
  payload,
});

export const deleteDialogSuccess = (payload: Dialog): ActionInterface => ({
  type: DELETE_DIALOG_SUCCESS,
  payload,
});

export const deleteDialogError = (): TypeInterface => ({
  type: DELETE_DIALOG_ERROR,
});

export const setSearchInputUsers = (payload: string): ActionInterface => ({
  type: SET_SEARCH_INPUT_USERS,
  payload,
});
