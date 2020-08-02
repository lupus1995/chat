import React, { FC, useEffect } from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import consts from '../resourse/consts';
import Loadeble from 'react-loadable';
const Register = Loadeble({
  loader: () => import('../pages/Register/Register'),
  loading: () => <div>Loading...</div>,
});

const Auth = Loadeble({
  loader: () => import('../pages/Auth/Auth'),
  loading: () => <div>Loading...</div>,
});

const Chat = Loadeble({
  loader: () => import('../pages/Chat/Chat'),
  loading: () => <div>Loading...</div>,
});

const RouterWrapper: FC = () => {
  const history = useHistory();
  useEffect(() => {
    history.push(consts.pages.chat);
  }, []);
  return (
    <Switch>
      <Route path={consts.pages.auth} component={Auth} />
      <Route path={consts.pages.register} component={Register} />
      <Route path={consts.pages.chat} component={Chat} />
    </Switch>
  );
};

export default RouterWrapper;
