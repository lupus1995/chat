import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import consts from '../../resourse/consts';

const NotFoundPage = (): null => {
  const history = useHistory();
  useEffect(() => {
    history.push('/');
  }, []);

  return null;
};

export default NotFoundPage;
