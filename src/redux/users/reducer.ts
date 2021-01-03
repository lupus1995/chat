import { UsersInterface } from '../../interfaces/users/Users';
import { ErrorMessages } from '../../interfaces/reducer/ErrorMessages';
import ActionInterface from '../../interfaces/reducer/Action';
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR,
  GET_MEMBERS_ERROR,
  GET_MEMBERS_REQUEST,
  GET_MEMBERS_SUCCESS,
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

    getMembersRequest: boolean;
    getMembersSuccess: boolean;
    getMembersError: boolean;
  };

  errors: ErrorMessages[];

  user: any;
  members: UsersInterface[];
}

const initState: UserReducerInterface = {
  fetchData: {
    createUserRequest: false,
    createUserSuccess: false,
    createUserError: false,

    authRequest: false,
    authSuccess: false,
    authError: false,

    getMembersRequest: false,
    getMembersSuccess: false,
    getMembersError: false,
  },
  errors: [],
  accessToken: '',
  user: null,
  members: [],
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

    // получение пользователей
    case GET_MEMBERS_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getMembersRequest: false,
          getMembersSuccess: false,
          getMembersError: false,
        },
        members: [],
      };
    }

    case GET_MEMBERS_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getMembersRequest: false,
          getMembersSuccess: false,
          getMembersError: false,
        },
        members: payload,
      };
    }

    case GET_MEMBERS_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getMembersRequest: false,
          getMembersSuccess: false,
          getMembersError: false,
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
