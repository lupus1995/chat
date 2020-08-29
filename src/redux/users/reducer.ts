import {
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USERS_REQUESTS,
} from './actions';
import ActionInterface from '../../interfaces/reducer/Action';
import { Users } from '../../interfaces/users/Users';

export interface UsersReducerInterface {
  fetchData: {
    getUsersRequest: boolean;
    getUsersSuccess: boolean;
    getUsersError: boolean;
  };
  users: Users[];
}

const initState: UsersReducerInterface = {
  fetchData: {
    getUsersRequest: false,
    getUsersSuccess: false,
    getUsersError: false,
  },
  users: [],
};

export function usersReducer(state = initState, action: ActionInterface) {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_REQUESTS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getUsersRequest: true,
          getUsersSuccess: false,
          getUsersError: false,
        },
        users: [],
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getUsersRequest: false,
          getUsersSuccess: true,
          getUsersError: false,
        },
        users: payload,
      };
    }
    case GET_USERS_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getUsersRequest: false,
          getUsersSuccess: false,
          getUsersError: true,
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
