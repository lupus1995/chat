import ActionInterface from '../../../interfaces/reducer/Action';
import {
  VERIFY_EMAIL_ERROR,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
} from './actions';

export interface VerifyEmailReducerInterface {
  fetchData: {
    verifyEmailRequest: boolean;
    verifyEmailSuccess: boolean;
    verifyEmailError: boolean;
  };
}

const initStateVerifyEmail: VerifyEmailReducerInterface = {
  fetchData: {
    verifyEmailRequest: false,
    verifyEmailSuccess: false,
    verifyEmailError: false,
  },
};

export default function verifyEmailReducer(
  state = initStateVerifyEmail,
  action: ActionInterface,
): VerifyEmailReducerInterface {
  const { type, payload } = action;
  switch (type) {
    case VERIFY_EMAIL_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          verifyEmailRequest: true,
          verifyEmailSuccess: false,
          verifyEmailError: false,
        },
      };
    }

    case VERIFY_EMAIL_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          verifyEmailRequest: false,
          verifyEmailSuccess: true,
          verifyEmailError: false,
        },
      };
    }

    case VERIFY_EMAIL_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          verifyEmailRequest: false,
          verifyEmailSuccess: false,
          verifyEmailError: true,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
