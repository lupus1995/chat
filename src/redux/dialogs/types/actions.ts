import ActionInterface from '../../../interfaces/reducer/Action';
import TypeInterface from '../../../interfaces/reducer/Type';

export const GET_TYPES_REQUEST = '@types/GET_TYPES_REQUEST';
export const GET_TYPES_SUCCESS = '@types/GET_TYPES_SUCCESS';
export const GET_TYPES_ERROR = '@types/GET_TYPES_ERROR';

export const getTypesRequest = (payload: AbortSignal): ActionInterface => ({
  type: GET_TYPES_REQUEST,
  payload,
});

export const getTypesSuccess = (payload: string[]): ActionInterface => ({
  type: GET_TYPES_SUCCESS,
  payload,
});

export const getTypesError = (): TypeInterface => ({
  type: GET_TYPES_ERROR,
});
