/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable global-require */
import { applyMiddleware, createStore } from 'redux';
import reduxSaga from 'redux-saga';
import rootReducer from './root.reducer';
import dialogsSaga from './src/redux/dialogs/dialogs/saga';
import messagesSaga from './src/redux/messages/saga';
import userSaga from './src/redux/users/saga';

const bindMiddleware = (middleware: any): any => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export default function configureStore() {
  const sagaMiddleware = reduxSaga();
  const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  sagaMiddleware.run(dialogsSaga);
  sagaMiddleware.run(messagesSaga);
  sagaMiddleware.run(userSaga);
  return store;
}
