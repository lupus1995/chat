import {
  GET_DIALOGS_SUCCESS,
  GET_DIALOGS_ERROR,
  GET_DIALOGS_REQUESTS,
  SET_SEARCH_INPUT_USERS,
  СREATE_DIALOG_ERROR,
  СREATE_DIALOG_REQUESTS,
  СREATE_DIALOG_SUCCESS,
  EDIT_DIALOG_ERROR,
  EDIT_DIALOG_REQUESTS,
  EDIT_DIALOG_SUCCESS,
  DELETE_DIALOG_ERROR,
  DELETE_DIALOG_REQUESTS,
  DELETE_DIALOG_SUCCESS,
  SET_TOGGLE_MODAL_CREATE_DIALOG,
} from './actions';
import ActionInterface from '../../../interfaces/reducer/Action';
import Dialogs from '../../../interfaces/dialogs/DialogsInterface';

export interface DialogsReducerInterface {
  fetchData: {
    getDialogsRequest: boolean;
    getDialogsSuccess: boolean;
    getDialogsError: boolean;

    createDialogRequest: boolean;
    createDialogSuccess: boolean;
    createDialogError: boolean;

    editDialogRequest: boolean;
    editDialogError: boolean;
    editDialogSuccess: boolean;

    deleteDialogRequest: boolean;
    deleteDialogSuccess: boolean;
    deleteDialogError: boolean;
  };
  dialogs: Dialogs[];
  searchInputUsers: string;
  toggleModalCreateDialog: boolean;
}

const initState: DialogsReducerInterface = {
  fetchData: {
    getDialogsRequest: false,
    getDialogsSuccess: false,
    getDialogsError: false,

    createDialogRequest: false,
    createDialogSuccess: false,
    createDialogError: false,

    editDialogRequest: false,
    editDialogError: false,
    editDialogSuccess: false,

    deleteDialogRequest: false,
    deleteDialogSuccess: false,
    deleteDialogError: false,
  },
  dialogs: [],
  searchInputUsers: '',
  toggleModalCreateDialog: false,
};

export function dialogsReducer(
  state = initState,
  action: ActionInterface,
): DialogsReducerInterface {
  const { type, payload } = action;
  switch (type) {
    // получение информации об диалогах
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

    // создание диалога
    case СREATE_DIALOG_REQUESTS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createDialogRequest: true,
          createDialogSuccess: false,
          createDialogError: false,
        },
      };
    }

    case СREATE_DIALOG_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createDialogRequest: false,
          createDialogSuccess: true,
          createDialogError: false,
        },
        dialogs: [payload, ...state.dialogs],
      };
    }

    case СREATE_DIALOG_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          createDialogRequest: false,
          createDialogSuccess: false,
          createDialogError: true,
        },
      };
    }

    // редактирование диалога
    case EDIT_DIALOG_REQUESTS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          editDialogRequest: true,
          editDialogError: false,
          editDialogSuccess: false,
        },
      };
    }

    case EDIT_DIALOG_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          editDialogRequest: false,
          editDialogError: false,
          editDialogSuccess: true,
        },
      };
    }

    case EDIT_DIALOG_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          editDialogRequest: false,
          editDialogError: true,
          editDialogSuccess: false,
        },
      };
    }

    // удаление диалога
    case DELETE_DIALOG_REQUESTS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          deleteDialogRequest: true,
          deleteDialogSuccess: false,
          deleteDialogError: false,
        },
      };
    }

    case DELETE_DIALOG_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          deleteDialogRequest: false,
          deleteDialogSuccess: true,
          deleteDialogError: false,
        },
      };
    }

    case DELETE_DIALOG_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          deleteDialogRequest: false,
          deleteDialogSuccess: false,
          deleteDialogError: true,
        },
      };
    }

    // поиск диалогов
    case SET_SEARCH_INPUT_USERS: {
      return {
        ...state,
        searchInputUsers: payload,
      };
    }

    case SET_TOGGLE_MODAL_CREATE_DIALOG: {
      return {
        ...state,
        toggleModalCreateDialog: payload,
      };
    }

    // модальные окна
    default: {
      return {
        ...state,
      };
    }
  }
}
