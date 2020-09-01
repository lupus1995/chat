import { combineReducers } from 'redux';
import {
  DialogsReducerInterface,
  dialogsReducer,
} from './src/redux/dialogs/reducer';

export interface RootReducerInterface {
  dialogs: DialogsReducerInterface;
}

const rootReducer = combineReducers({
  dialogs: dialogsReducer,
});

export default rootReducer;
