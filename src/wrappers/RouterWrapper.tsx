import React, { FC, useEffect } from 'react';
import { useHistory, Router, Switch, Route } from 'react-router-dom';
import consts from '../consts';
import Auth from '../pages/Auth/Auth';

const RouterWrapper: FC = ({ children }) => {
  const history = useHistory();
  useEffect(() => {
    history.push(consts.pages.auth);
  }, []);
  return (
    <Switch>
      <Route path={consts.pages.auth} component={() => <Auth />} />
    </Switch>
  );
};

export default RouterWrapper;
