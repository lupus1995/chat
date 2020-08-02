import React, { FC } from 'react';
import './style.scss';
import Button from '../Button/Button';

const Form: FC<{ className?: string; buttonText?: string }> = ({
  children,
  className = '',
  buttonText = 'ВОЙТИ В АККАУНТ',
}) => {
  return (
    <form className={className} action="#" autoComplete="off">
      {children}
      <Button primary className="text-uppercase">
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
