import { ErrorMessages } from '../../interfaces/reducer/ErrorMessages';
import { AccessTokenInterface } from '../../interfaces/users/AccessTokenInterface';
import { AuthUserRequestInterface } from '../../interfaces/users/AuthUserRequestInterface';
import { CreateUserInterface } from '../../interfaces/users/CreateUserInterface';

export const CREATE_USER_REQUEST = '@users/CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = '@users/CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = '@users/CREATE_USER_ERROR';

export const AUTH_REQUEST = '@users/AUTH_REQUEST';
export const AUTH_SUCCESS = '@users/AUTH_SUCCESS';
export const AUTH_ERROR = '@users/AUTH_ERROR';

// создание пользователя
export const createUserRequest = (payload: CreateUserInterface) => ({
  type: CREATE_USER_REQUEST,
  payload,
});

export const createUserSuccess = () => ({
  type: CREATE_USER_SUCCESS,
});

export const createUserError = (payload: ErrorMessages[]) => ({
  type: CREATE_USER_ERROR,
  payload,
});

// авторизация пользователя
export const authRequest = (payload: AuthUserRequestInterface) => ({
  type: AUTH_REQUEST,
  payload,
});

export const authSuccess = (payload: AccessTokenInterface) => ({
  type: AUTH_SUCCESS,
  payload,
});

export const authError = () => ({
  type: AUTH_ERROR,
});
