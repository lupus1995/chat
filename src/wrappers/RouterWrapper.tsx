import React, { FC, useEffect } from 'react';
import { useHistory, Router, Switch, Route } from 'react-router-dom';
import consts from '../consts';
import Auth from '../pages/Auth/Auth';
import Register from '../pages/Register/Regster';

const RouterWrapper: FC = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    history.push(consts.pages.auth);
  }, []);
  return (
    <Switch>
      <Route path={consts.pages.auth} component={() => <Auth />} />
      <Route path={consts.pages.register} component={() => <Register />} />
    </Switch>
  );
};

export default RouterWrapper;
