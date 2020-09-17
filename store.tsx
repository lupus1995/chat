import { applyMiddleware, createStore } from 'redux';
import reduxSaga from 'redux-saga';
import rootReducer from './root.reducer';
import { dialogsSaga } from './src/redux/dialogs/saga';
import { messagesSaga } from './src/redux/messages/saga';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
};

export default function configureStore() {
  const sagaMiddleware = reduxSaga();
  const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  sagaMiddleware.run(dialogsSaga);
  sagaMiddleware.run(messagesSaga);
  return store;
}
