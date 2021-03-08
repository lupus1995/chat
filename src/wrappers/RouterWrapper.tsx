import React, { FC, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import consts from '../resourse/consts';

const RegisterLoader = lazy(() => import('../pages/Register/Register'));
const RegisterPage = () => (
  <Suspense fallback={null}>
    <RegisterLoader />
  </Suspense>
);
const VerifyEmailLoader = lazy(
  () => import('../pages/VerifyEmail/VerifyEmail'),
);
const VerifyEmailPage = () => (
  <Suspense fallback={null}>
    <VerifyEmailLoader />
  </Suspense>
);

const AuthLoader = lazy(() => import('../pages/Auth/Auth'));
const AuthPage = () => (
  <Suspense fallback={null}>
    <AuthLoader />
  </Suspense>
);

const ChatLoader = lazy(() => import('../pages/Chat/Chat'));
const ChatPage = () => (
  <Suspense fallback={null}>
    <ChatLoader />
  </Suspense>
);

const RouterWrapper: FC = () => {
  return (
    <Switch>
      <Route path={consts.pages.register} component={RegisterPage} />
      <Route path={consts.pages.chat} component={ChatPage} />
      <Route path="/verify/:id" component={VerifyEmailPage} />
      <Route path="/" component={AuthPage} />
    </Switch>
  );
};

export default RouterWrapper;
