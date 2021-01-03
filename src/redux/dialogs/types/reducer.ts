import ActionInterface from '../../../interfaces/reducer/Action';
import {
  GET_TYPES_ERROR,
  GET_TYPES_REQUEST,
  GET_TYPES_SUCCESS,
} from './actions';

export interface TypesReducerInterface {
  fetchData: {
    getTypesRequest: boolean;
    getTypesSuccess: boolean;
    getTypesError: boolean;
  };

  types: string[];
}

const initState: TypesReducerInterface = {
  fetchData: {
    getTypesRequest: false,
    getTypesSuccess: false,
    getTypesError: false,
  },

  types: [],
};

export default function typesReducer(
  state = initState,
  action: ActionInterface,
): TypesReducerInterface {
  const { type, payload } = action;
  switch (type) {
    case GET_TYPES_REQUEST: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getTypesRequest: true,
          getTypesSuccess: false,
          getTypesError: false,
        },
        types: [],
      };
    }
    case GET_TYPES_SUCCESS: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getTypesRequest: false,
          getTypesSuccess: true,
          getTypesError: false,
        },
        types: payload,
      };
    }
    case GET_TYPES_ERROR: {
      return {
        ...state,
        fetchData: {
          ...state.fetchData,
          getTypesRequest: false,
          getTypesSuccess: false,
          getTypesError: true,
        },
      };
    }
    default: {
      return { ...initState };
    }
  }
}
