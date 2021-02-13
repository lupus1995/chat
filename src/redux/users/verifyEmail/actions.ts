import IdAndSignal from '../../../interfaces/commons/IdAndSignal';
import ActionInterface from '../../../interfaces/reducer/Action';
import TypeInterface from '../../../interfaces/reducer/Type';

export const VERIFY_EMAIL_REQUEST = '@verifyEmail/VERIFY_EMAIL_REQUEST';
export const VERIFY_EMAIL_SUCCESS = '@verifyEmail/VERIFY_EMAIL_SUCCESS';
export const VERIFY_EMAIL_ERROR = '@verifyEmail/VERIFY_EMAIL_ERROR';

export const verifyEmailRequestAction = (
  payload: IdAndSignal,
): ActionInterface => ({
  type: VERIFY_EMAIL_REQUEST,
  payload,
});

export const verifyEmailSuccessAction = (): TypeInterface => ({
  type: VERIFY_EMAIL_SUCCESS,
});

export const verifyEmailErrorAction = (): TypeInterface => ({
  type: VERIFY_EMAIL_ERROR,
});
