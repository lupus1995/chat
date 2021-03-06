import IdAndSignal from '../interfaces/commons/IdAndSignal';
import { AuthUserRequestInterface } from '../interfaces/users/auth/AuthUserRequestInterface';
import { CreateUserInterface } from '../interfaces/users/create/CreateUserInterface';
import { UsersInterface } from '../interfaces/users/UsersInterface';
import consts from '../resourse/consts';

const initFetch = {
  method: 'POST',
  headers: new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
};

export const createUser = async ({
  signal,
  name,
  password,
  login,
  email,
}: CreateUserInterface) => {
  const request = await fetch(`${consts.path}/users`, {
    ...initFetch,
    signal,
    body: JSON.stringify({ name, password, email, login }),
  });

  const result = await request.json();

  if (request.status === 400 || result.statusCode === 400) {
    throw result;
  }

  return result;
};

export const auth = async ({
  email,
  password,
  signal,
}: AuthUserRequestInterface) => {
  const request = await fetch(`${consts.path}/auth/login`, {
    ...initFetch,
    signal,
    body: JSON.stringify({ password, email }),
  });

  const result = await request.json();

  if (request.status > 400) {
    throw result;
  }

  return result;
};

export const verifyUserEmail = async (
  data: IdAndSignal,
): Promise<UsersInterface> => {
  const request = await fetch(`${consts.path}/users/verify/${data.id}`, {
    method: 'get',
    signal: data.signal,
  });

  const result = await request.json();

  if (request.status > 400) {
    throw result;
  }

  return result;
};
