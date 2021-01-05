import IdAndSignal from '../../../interfaces/commons/IdAndSignal';
import DialogInterface from '../../../interfaces/dialogs/DialogInterface';
import RequestDialog from '../../../interfaces/dialogs/CreateRequestDialogInterface';
import ActionInterface from '../../../interfaces/reducer/Action';
import SignalInterface from '../../../interfaces/reducer/Signal';
import TypeInterface from '../../../interfaces/reducer/Type';
import EditRequestDialogInterface from '../../../interfaces/dialogs/EditRequestDialogInterface';
import DialogsInterface from '../../../interfaces/dialogs/DialogsInterface';

export const GET_DIALOGS_REQUESTS = '@dialogs/GET_DIALOGS_REQUESTS';
export const GET_DIALOGS_SUCCESS = '@dialogs/GET_DIALOGS_SUCCESS';
export const GET_DIALOGS_ERROR = '@dialogs/GET_DIALOGS_ERROR';

export const СREATE_DIALOG_REQUESTS = '@dialogs/СREATE_DIALOG_REQUESTS';
export const СREATE_DIALOG_SUCCESS = '@dialogs/СREATE_DIALOG_SUCCESS';
export const СREATE_DIALOG_ERROR = '@dialogs/СREATE_DIALOG_ERROR';

export const EDIT_DIALOG_REQUESTS = '@dialogs/EDIT_DIALOG_REQUESTS';
export const EDIT_DIALOG_SUCCESS = '@dialogs/EDIT_DIALOG_SUCCESS';
export const EDIT_DIALOG_ERROR = '@dialogs/EDIT_DIALOG_ERROR';

export const DELETE_DIALOG_REQUESTS = '@dialogs/DELETE_DIALOG_REQUESTS';
export const DELETE_DIALOG_SUCCESS = '@dialogs/DELETE_DIALOG_SUCCESS';
export const DELETE_DIALOG_ERROR = '@dialogs/DELETE_DIALOG_ERROR';

export const SET_SEARCH_INPUT_USERS = '@dialogs/SET_SEARCH_INPUT_USERS';

export const SET_TOGGLE_MODAL_CREATE_DIALOG =
  '@dialogs/SET_TOGGLE_MODAL_CREATE_DIALOG';
export const SET_TOGGLE_MODAL_EDIT_DIALOG =
  '@dialogs/SET_TOGGLE_MODAL_EDIT_DIALOG';

export const SET_ACTIVE_DIALOG = '@dialogs/SET_ACTIVE_DIALOG';

// получение информации об диалогах
export const getDialogsRequest = (payload: IdAndSignal): ActionInterface => ({
  type: GET_DIALOGS_REQUESTS,
  payload,
});

export const getDialogsSuccess = (
  payload: DialogsInterface[],
): ActionInterface => ({
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

export const createDialogSuccess = (
  payload: DialogsInterface,
): ActionInterface => ({
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

export const editDialogSuccess = (
  payload: DialogInterface,
): ActionInterface => ({
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

export const deleteDialogSuccess = (
  payload: DialogInterface,
): ActionInterface => ({
  type: DELETE_DIALOG_SUCCESS,
  payload,
});

export const deleteDialogError = (): TypeInterface => ({
  type: DELETE_DIALOG_ERROR,
});

// поиск диалога
export const setSearchInputUsers = (payload: string): ActionInterface => ({
  type: SET_SEARCH_INPUT_USERS,
  payload,
});

// модальные окна
export const setToggleModalCreateDialog = (
  payload: boolean,
): ActionInterface => ({
  type: SET_TOGGLE_MODAL_CREATE_DIALOG,
  payload,
});

export const setToggleModaEditModalDialog = (
  payload: boolean,
): ActionInterface => ({
  type: SET_TOGGLE_MODAL_EDIT_DIALOG,
  payload,
});

// активный диалог
export const setActiveDialog = (
  payload: DialogsInterface | null,
): ActionInterface => ({
  type: SET_ACTIVE_DIALOG,
  payload,
});
