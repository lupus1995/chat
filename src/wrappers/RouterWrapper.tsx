import React, { FC, useEffect, lazy, Suspense } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import consts from '../consts';
const Auth = lazy(() => import('../pages/Auth/Auth'));
const Register = lazy(() => import('../pages/Register/Regster'));

const RouterWrapper: FC = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    history.push(consts.pages.auth);
  }, []);
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route path={consts.pages.auth} component={Auth} />
        <Route path={consts.pages.register} component={Register} />
      </Switch>
    </Suspense>
  );
};

export default RouterWrapper;
