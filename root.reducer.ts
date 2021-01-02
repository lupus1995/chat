import { combineReducers } from 'redux';
import {
  DialogsReducerInterface,
  dialogsReducer,
} from './src/redux/dialogs/dialogs/reducer';
import { UserReducerInterface, usersReducer } from './src/redux/users/reducer';

export interface RootReducerInterface {
  dialogs: {
    dialogs: DialogsReducerInterface;
  };
  users: UserReducerInterface;
}

const rootReducer = combineReducers({
  dialogs: combineReducers({ dialogs: dialogsReducer }),
  users: usersReducer,
});

export default rootReducer;
