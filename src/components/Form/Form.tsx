import React, { FC } from 'react';
import './style.scss';
import Button from '../Button/Button';

const Form: FC<{ className?: string }> = ({ children, className = '' }) => {
  return (
    <form className={className} action="#" autoComplete="off">
      {children}
      <Button>ВОЙТИ В АККАУНТ</Button>
    </form>
  );
};

export default Form;
