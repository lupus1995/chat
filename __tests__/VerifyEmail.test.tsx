import { render } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import store from '../store';
import VerifyEmail from '../src/pages/VerifyEmail/VerifyEmail';
import AuthPage from '../src/pages/Auth/Auth';
import FetchCancel from '../src/wrappers/FetchCancel/FetchCancel';
import consts from '../src/resourse/consts';

const Component = () => {
  return (
    <Provider store={store()}>
      <FetchCancel>
        <Router>
          <Switch>
            <Route path="/verify/:id" component={VerifyEmail} />
            <Route path="/" component={AuthPage} />
          </Switch>

          <Link to="/verify/6045edb28b8ebb00fc3c0aea">Verify</Link>
        </Router>
      </FetchCancel>
    </Provider>
  );
};

const mockData = () => {
  fetchMock.get(`${consts.path}/users/verify/6045edb28b8ebb00fc3c0aea`, {
    email: 'canya.panfilov.95@gmail.com',
    login: 'alex',
    name: 'Александр',
    password: '$2b$10$WaJHn2pe5eu2X1DvtdBzTO9cz3zAM9mrnexco12hRDxvIZz/ixIgm',
    verifyEmail: true,
    __v: 0,
    _id: '6045edb28b8ebb00fc3c0aea',
  });
};

describe('page validation email', () => {
  it('check render page validation email', () => {
    const { getByText } = render(<Component />);
    const link = getByText(/Verify/i);
    userEvent.click(link);
    const title = getByText(/Подтвердите свой аккаунт/i);
    const subtitle = getByText(/Ожидайте подтвеждение почты/i);
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  // найти способ тестирования редиректа после получения вызова
  it('check redirect to auth', () => {
    const { getByText, findByText } = render(<Component />);
    const link = getByText(/Verify/i);
    userEvent.click(link);
    mockData();
    // const title = getByText(/войти в аккаунт/i);
    // expect(title).toBeInTheDocument();
  });
});
