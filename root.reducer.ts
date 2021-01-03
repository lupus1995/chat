import { combineReducers } from 'redux';
import typesReducer, {
  TypesReducerInterface,
} from './src/redux/dialogs/types/reducer';
import {
  DialogsReducerInterface,
  dialogsReducer,
} from './src/redux/dialogs/dialogs/reducer';
import { UserReducerInterface, usersReducer } from './src/redux/users/reducer';

export interface RootReducerInterface {
  dialogs: {
    dialogs: DialogsReducerInterface;
    types: TypesReducerInterface;
  };
  users: UserReducerInterface;
}

const rootReducer = combineReducers({
  dialogs: combineReducers({ dialogs: dialogsReducer, types: typesReducer }),
  users: usersReducer,
});

export default rootReducer;
