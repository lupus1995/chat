import { ErrorMessages } from "../../interfaces/reducer/ErrorMessages";
import ActionInterface from '../../interfaces/reducer/Action';
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from './actions';
import { AccessTokenInterface } from '../../interfaces/users/AccessTokenInterface';

export interface UserReducerInterface extends AccessTokenInterface {
  fetchData: {
    createUserRequest: boolean;
    createUserSuccess: boolean;
    createUserError: boolean;

    authRequest: boolean;
    authSuccess: boolean;
    authError: boolean;
  };

  errors: ErrorMessages[];

  user: any;
}

const initState: UserReducerInterface = {
  fetchData: {
    createUserRequest: false,
    createUserSuccess: false,
    createUserError: false,

    authRequest: false,
    authSuccess: false,
    authError: false,
  },
  errors: [],
  accessToken: '',
  user: null,
};

export function usersReducer(state = initState, action: ActionInterface) {
  const { type, payload } = action;

  switch (type) {
    // создание пользователя
    case CREATE_USER_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createUserRequest: true,
          createUserSuccess: false,
          createUserError: false,
        },
        errors: [],
      };
    }

    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createUserRequest: false,
          createUserSuccess: true,
          createUserError: false,
        },
      };
    }

    case CREATE_USER_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createUserRequest: false,
          createUserSuccess: false,
          createUserError: true,
        },
        errors: payload,
      };
    }

    // авторизация пользователя
    case AUTH_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          authRequest: true,
          authSuccess: false,
          authError: false,
        },
        accessToken: '',
        errors: [],
      };
    }

    case AUTH_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          authRequest: false,
          authSuccess: true,
          authError: false,
        },
        accessToken: payload,
      };
    }

    case AUTH_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          authRequest: false,
          authSuccess: false,
          authError: true,
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
