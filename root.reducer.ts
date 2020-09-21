import { combineReducers } from 'redux';
import {
  DialogsReducerInterface,
  dialogsReducer,
} from './src/redux/dialogs/reducer';
import { UserReducerInterface, usersReducer } from './src/redux/users/reducer';

export interface RootReducerInterface {
  dialogs: DialogsReducerInterface;
  users: UserReducerInterface;
}

const rootReducer = combineReducers({
  dialogs: dialogsReducer,
  users: usersReducer,
});

export default rootReducer;
