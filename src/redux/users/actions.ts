import { Users } from '../../interfaces/users/Users';

export const GET_USERS_REQUESTS = '@users/GET_USERS_REQUESTS';
export const GET_USERS_SUCCESS = '@users/GET_USERS_SUCCESS';
export const GET_USERS_ERROR = '@users/GET_USERS_ERROR';

export const getUsersRequest = (payload: AbortSignal) => ({
  type: GET_USERS_REQUESTS,
  payload,
});

export const getUsersSuccess = (payload: Users[]) => ({
  type: GET_USERS_SUCCESS,
  payload,
});

export const getUsersError = () => ({
  type: GET_USERS_ERROR,
});
