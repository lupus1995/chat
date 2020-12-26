import IdAndSignal from '../../interfaces/commons/IdAndSignal';
import Dialogs from '../../interfaces/dialogs/Dialogs';

export const GET_DIALOGS_REQUESTS = '@users/GET_DIALOGS_REQUESTS';
export const GET_DIALOGS_SUCCESS = '@users/GET_DIALOGS_SUCCESS';
export const GET_DIALOGS_ERROR = '@users/GET_DIALOGS_ERROR';
export const SET_SEARCH_INPUT_USERS = '@users/SET_SEARCH_INPUT_USERS';

export const getDialogsRequest = (payload: IdAndSignal) => ({
  type: GET_DIALOGS_REQUESTS,
  payload,
});

export const getDialogsSuccess = (payload: Dialogs[]) => ({
  type: GET_DIALOGS_SUCCESS,
  payload,
});

export const getDialogsError = () => ({
  type: GET_DIALOGS_ERROR,
});

export const setSearchInputUsers = (payload: string) => ({
  type: SET_SEARCH_INPUT_USERS,
  payload,
});
