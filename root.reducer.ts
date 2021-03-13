import { combineReducers } from 'redux';
import verifyEmailReducer, {
  VerifyEmailReducerInterface,
} from './src/redux/users/verifyEmail/reducer';
import typesReducer, {
  TypesReducerInterface,
} from './src/redux/dialogs/types/reducer';
import {
  DialogsReducerInterface,
  dialogsReducer,
} from './src/redux/dialogs/dialogs/reducer';
import {
  UserReducerInterface,
  usersReducer,
} from './src/redux/users/users/reducer';

export interface RootReducerInterface {
  dialogs: {
    dialogs: DialogsReducerInterface;
    types: TypesReducerInterface;
  };
  users: {
    users: UserReducerInterface;
    verifyEmail: VerifyEmailReducerInterface;
  };
}

const rootReducer = combineReducers({
  dialogs: combineReducers({ dialogs: dialogsReducer, types: typesReducer }),
  users: combineReducers({
    users: usersReducer,
    verifyEmail: verifyEmailReducer,
  }),
});

export default rootReducer;
