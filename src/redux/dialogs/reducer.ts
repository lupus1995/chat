import {
  GET_DIALOGS_SUCCESS,
  GET_DIALOGS_ERROR,
  GET_DIALOGS_REQUESTS,
  SET_SEARCH_INPUT_USERS,
} from './actions';
import ActionInterface from '../../interfaces/reducer/Action';
import Dialogs from '../../interfaces/dialogs/Dialogs';

export interface DialogsReducerInterface {
  fetchData: {
    getDialogsRequest: boolean;
    getDialogsSuccess: boolean;
    getDialogsError: boolean;
  };
  dialogs: Dialogs[];
  searchInputUsers: string;
}

const initState: DialogsReducerInterface = {
  fetchData: {
    getDialogsRequest: false,
    getDialogsSuccess: false,
    getDialogsError: false,
  },
  dialogs: [],
  searchInputUsers: '',
};

export function dialogsReducer(state = initState, action: ActionInterface) {
  const { type, payload } = action;
  switch (type) {
    case GET_DIALOGS_REQUESTS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getDialogsRequest: true,
          getDialogsSuccess: false,
          getDialogsError: false,
        },
        dialogs: [],
      };
    }
    case GET_DIALOGS_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getDialogsRequest: false,
          getDialogsSuccess: true,
          getDialogsError: false,
        },
        dialogs: payload,
      };
    }
    case GET_DIALOGS_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getDialogsRequest: false,
          getDialogsSuccess: false,
          getDialogsError: true,
        },
      };
    }
    case SET_SEARCH_INPUT_USERS: {
      return {
        ...state,
        searchInputUsers: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
