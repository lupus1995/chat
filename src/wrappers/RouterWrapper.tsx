import React, { FC, useEffect } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import consts from '../consts';
import Loadeble from 'react-loadable';
const Register = Loadeble({
  loader: () => import('../pages/Register/Register'),
  loading: () => <div>Loading...</div>,
});

const Auth = Loadeble({
  loader: () => import('../pages/Auth/Auth'),
  loading: () => <div>Loading...</div>,
});

const RouterWrapper: FC = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    history.push(consts.pages.auth);
  }, []);
  return (
    <Switch>
      <Route path={consts.pages.auth} component={Auth} />
      <Route path={consts.pages.register} component={Register} />
    </Switch>
  );
};

export default RouterWrapper;
