import React, { FC } from 'react';
import './style.scss';

const Button: FC<{
  type?: JSX.IntrinsicElements['button']['type'];
  className?: string;
  primary?: boolean;
}> = ({ children, primary = false, className = '', type = 'button' }) => {
  return (
    <button
      className={`button ${className} ${primary ? 'primary' : ''}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
