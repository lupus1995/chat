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
  GET_USER_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  CLEAR_FETCH_CREATE_USER,
} from './actions';
import { AccessTokenInterface } from '../../interfaces/users/AccessTokenInterface';
import { UsersInterface } from '../../interfaces/users/UsersInterface';

export interface UserReducerInterface extends AccessTokenInterface {
  fetchData: {
    createUserRequest: boolean;
    createUserSuccess: boolean;
    createUserError: boolean;

    getUserRequest: boolean;
    getUserSuccess: boolean;
    getUserError: boolean;

    authRequest: boolean;
    authSuccess: boolean;
    authError: boolean;

    getMembersRequest: boolean;
    getMembersSuccess: boolean;
    getMembersError: boolean;
  };

  errors: ErrorMessages[];

  user: UsersInterface | null;
  members: UsersInterface[];
}

const initState: UserReducerInterface = {
  fetchData: {
    createUserRequest: false,
    createUserSuccess: false,
    createUserError: false,

    getUserRequest: false,
    getUserSuccess: false,
    getUserError: false,

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

export function usersReducer(
  state = initState,
  action: ActionInterface,
): UserReducerInterface {
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
        user: payload,
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

    case CLEAR_FETCH_CREATE_USER: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createUserRequest: false,
          createUserSuccess: false,
          createUserError: false,
        },
      };
    }

    // получение пользователя
    case GET_USER_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getUserRequest: true,
          getUserSuccess: false,
          getUserError: false,
        },
      };
    }

    case GET_USER_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getUserRequest: false,
          getUserSuccess: true,
          getUserError: false,
        },
      };
    }

    case GET_USER_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getUserRequest: false,
          getUserSuccess: false,
          getUserError: true,
        },
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
          getMembersRequest: true,
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
          getMembersSuccess: true,
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
          getMembersError: true,
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
