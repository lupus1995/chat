/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'fetch-mock-jest';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store';
import Register from '../src/pages/Register/Register';
import FetchCancel from '../src/wrappers/FetchCancel/FetchCancel';
import consts from '../src/resourse/consts';
import Auth from '../src/pages/Auth/Auth';

const renderWithRedux = (component: JSX.Element) => {
  return {
    ...render(<Provider store={store()}>{component}</Provider>),
    store,
  };
};

const validEmail = 'canya.panfilov.96@gmail.com';
const invalidEmail = 'canya.panfilov.95@gmail.com';

const validLogin = 'alex1';
const inValidLogin = 'alex';

const dataRegistrationForm = {
  email: validEmail,
  login: validLogin,
  name: 'alex',
  password: 'sancho1995',
  __v: 0,
  _id: '601efe01157b5b3c240bb052',
};

const mockData = () => {
  fetchMock.post(`${consts.path}/users`, (url, options) => {
    const body = JSON.parse(options.body as string);

    if (body.email === invalidEmail) {
      return {
        error: 'Bad Request',
        message: [
          {
            children: [],
            constraints: {
              UniqueUserEmailValidatorConstruct:
                'This email address is already in use',
            },
            property: 'email',
            target: {
              email: 'canya.panfilov.95@gmail.com',
              login: 'alex',
              name: 'alex',
              password: 'sancho1995',
            },
            value: 'canya.panfilov.95@gmail.com',
          },
          {
            children: [],
            constraints: {
              UniqueUserLoginValidatorConstruct: 'This login is already in use',
            },
            property: 'login',
            target: {
              email: 'canya.panfilov.95@gmail.com',
              login: 'alex',
              name: 'alex',
              password: 'sancho1995',
            },
            value: 'alex',
          },
        ],
        statusCode: 400,
      };
    }
    return dataRegistrationForm;
  });
};

describe('check registration from', () => {
  beforeEach(() => {
    fetchMock.reset();
  });

  it('check valid data', async () => {
    mockData();
    const { getByPlaceholderText, getAllByText, findByText } = renderWithRedux(
      <Router>
        <FetchCancel>
          <Register />
        </FetchCancel>
      </Router>,
    );
    const emailValue = validEmail;
    const email: any = getByPlaceholderText('Email');
    userEvent.paste(email, emailValue);

    const nameValue = validLogin;
    const name: any = getByPlaceholderText('Имя');
    userEvent.paste(name, nameValue);

    const login = getByPlaceholderText('Логин');
    userEvent.paste(login, nameValue);

    const passwordValue = 'sancho1995';
    const password: any = getByPlaceholderText('Пароль');
    userEvent.paste(password, passwordValue);

    const repeatPassword: any = getByPlaceholderText('Повторите пароль');
    userEvent.paste(repeatPassword, passwordValue);

    const submitButton = getAllByText(/Зарегистрироваться/i)[1];
    userEvent.click(submitButton);

    const successSubmitMessage = findByText(/Подтвердите свой аккаунт/i);

    expect(await successSubmitMessage).toBeInTheDocument();
  });

  it('check validation email error', async () => {
    mockData();
    const { getByPlaceholderText, getAllByText, findByText } = renderWithRedux(
      <Router>
        <FetchCancel>
          <Register />
        </FetchCancel>
      </Router>,
    );
    const emailValue = invalidEmail;
    const email: any = getByPlaceholderText('Email');
    userEvent.paste(email, emailValue);

    const nameValue = 'alex';
    const name: any = getByPlaceholderText('Имя');
    userEvent.paste(name, nameValue);

    const login = getByPlaceholderText('Логин');
    userEvent.paste(login, nameValue);

    const passwordValue = 'sancho1995';
    const password: any = getByPlaceholderText('Пароль');
    userEvent.paste(password, passwordValue);

    const repeatPassword: any = getByPlaceholderText('Повторите пароль');
    userEvent.paste(repeatPassword, passwordValue);

    const submitButton = getAllByText(/Зарегистрироваться/i)[1];
    userEvent.click(submitButton);
    const textError = findByText(/This email address is already in use/i);

    expect(await textError).toBeInTheDocument();
  });

  it('check validation login error', async () => {
    mockData();
    const { getByPlaceholderText, getAllByText, findByText } = renderWithRedux(
      <Router>
        <FetchCancel>
          <Register />
        </FetchCancel>
      </Router>,
    );
    const emailValue = invalidEmail;
    const email: any = getByPlaceholderText('Email');
    userEvent.paste(email, emailValue);

    const nameValue = inValidLogin;
    const name: any = getByPlaceholderText('Имя');
    userEvent.paste(name, nameValue);

    const login = getByPlaceholderText('Логин');
    userEvent.paste(login, nameValue);

    const passwordValue = 'sancho1995';
    const password: any = getByPlaceholderText('Пароль');
    userEvent.paste(password, passwordValue);

    const repeatPassword: any = getByPlaceholderText('Повторите пароль');
    userEvent.paste(repeatPassword, passwordValue);

    const submitButton = getAllByText(/Зарегистрироваться/i)[1];
    userEvent.click(submitButton);
    const textError = findByText(/This login is already in use/i);

    expect(await textError).toBeInTheDocument();
  });

  it('check link', () => {
    const { getByText } = renderWithRedux(
      <Router>
        <FetchCancel>
          <Register />
        </FetchCancel>
      </Router>,
    );
    const link = getByText(/Войти в аккаунт/i);

    expect(link).toBeInTheDocument();
  });

  it('check work link', async () => {
    const { getAllByText, findByText } = renderWithRedux(
      <Router>
        <FetchCancel>
          <Register />
          <Auth />
        </FetchCancel>
      </Router>,
    );
    const link = getAllByText(/Войти в аккаунт/i)[0];
    userEvent.click(link);
    const titleForm = findByText(/Пожалуйста, войдите в свой аккаунт/i);

    expect(await titleForm).toBeInTheDocument();
  });
});
