import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { NotificationList } from 'notification-panfilov';
import App from './App/App';
import store from '../store';
import FetchCancel from './wrappers/FetchCancel/FetchCancel';

render(
  <NotificationList>
    <Provider store={store()}>
      <FetchCancel>
        <App />
      </FetchCancel>
    </Provider>
  </NotificationList>,
  document.getElementById('root'),
);
