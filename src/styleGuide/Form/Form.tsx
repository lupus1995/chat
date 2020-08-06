import React, { FC, useRef } from 'react';
import './style.scss';
import Button from '../Button/Button';

const Form: FC<{ className?: string; buttonText?: string }> = ({
  children,
  className = '',
  buttonText = 'ВОЙТИ В АККАУНТ',
}) => {
  const ref = useRef(null);
  console.log(ref.current);
  return (
    <form ref={ref} className={className} action="#" autoComplete="off">
      {children}
      <Button primary className="text-uppercase">
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
