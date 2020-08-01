import React, { FC } from 'react';
import './style';

const Button: FC<{
  type?: JSX.IntrinsicElements['button']['type'];
  className?: string;
}> = ({ children, className = 'primary', type = 'button' }) => {
  return (
    <button className={`button ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
