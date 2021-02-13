import { UsersInterface } from '../../../interfaces/users/UsersInterface';
import IdAndSignal from '../../../interfaces/commons/IdAndSignal';
import ActionInterface from '../../../interfaces/reducer/Action';
import { ErrorMessages } from '../../../interfaces/reducer/ErrorMessages';
import TypeInterface from '../../../interfaces/reducer/Type';
import { AccessTokenInterface } from '../../../interfaces/users/AccessTokenInterface';
import { CreateUserInterface } from '../../../interfaces/users/create/CreateUserInterface';
import { AuthUserRequestInterface } from '../../../interfaces/users/auth/AuthUserRequestInterface';

export const CREATE_USER_REQUEST = '@users/CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = '@users/CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = '@users/CREATE_USER_ERROR';
export const CLEAR_FETCH_CREATE_USER = '@users/CLEAR_FETCH_CREATE_USER';

export const GET_USER_REQUEST = '@users/GET_USER_REQUEST';
export const GET_USER_SUCCESS = '@users/GET_USER_SUCCESS';
export const GET_USER_ERROR = '@users/GET_USER_ERROR';

export const AUTH_REQUEST = '@users/AUTH_REQUEST';
export const AUTH_SUCCESS = '@users/AUTH_SUCCESS';
export const AUTH_ERROR = '@users/AUTH_ERROR';

export const GET_MEMBERS_REQUEST = '@users/GET_MEMBERS_REQUEST';
export const GET_MEMBERS_SUCCESS = '@users/GET_MEMBERS_SUCCESS';
export const GET_MEMBERS_ERROR = '@users/GET_MEMBERS_ERROR';

export const SET_USER_FROM_EDIT_DIALOG = '@users/SET_USER_FROM_EDIT_DIALOG';

// создание пользователя
export const createUserRequest = (
  payload: CreateUserInterface,
): ActionInterface => ({
  type: CREATE_USER_REQUEST,
  payload,
});

export const createUserSuccess = (
  payload: UsersInterface,
): ActionInterface => ({
  type: CREATE_USER_SUCCESS,
  payload,
});

export const createUserError = (payload: ErrorMessages[]): ActionInterface => ({
  type: CREATE_USER_ERROR,
  payload,
});

export const clearFetchCreateUser = (): TypeInterface => ({
  type: CLEAR_FETCH_CREATE_USER,
});

// получение юзера
export const getUserRequest = (payload: IdAndSignal): ActionInterface => ({
  type: GET_USER_REQUEST,
  payload,
});

export const getUserSuccess = (payload: UsersInterface): ActionInterface => ({
  type: GET_USER_REQUEST,
  payload,
});

export const getUserError = (): TypeInterface => ({
  type: GET_USER_REQUEST,
});

// авторизация пользователя
export const authRequest = (
  payload: AuthUserRequestInterface,
): ActionInterface => ({
  type: AUTH_REQUEST,
  payload,
});

export const authSuccess = (
  payload: AccessTokenInterface,
): ActionInterface => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authError = (): TypeInterface => ({
  type: AUTH_ERROR,
});

// получение юзеров
export const getMembersRequest = (payload: IdAndSignal): ActionInterface => ({
  type: GET_MEMBERS_REQUEST,
  payload,
});

export const getMembersSuccess = (
  payload: UsersInterface[],
): ActionInterface => ({
  type: GET_MEMBERS_SUCCESS,
  payload,
});

export const getMembersError = (): TypeInterface => ({
  type: GET_MEMBERS_ERROR,
});
