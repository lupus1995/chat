import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import store from '../store';
import FetchCancel from './wrappers/FetchCancel/FetchCancel';
import NotificationList from './components/Notification/NotificationList';

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
