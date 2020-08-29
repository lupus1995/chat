import { combineReducers } from 'redux';
import { UsersReducerInterface, usersReducer } from './src/redux/users/reducer';

export interface RootReducerInterface {
  users: UsersReducerInterface;
}

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
