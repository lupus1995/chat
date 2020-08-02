import React, { FC } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const CustomLink: FC<{ to: string; className?: string }> = ({
  children,
  to,
  className = '',
}) => {
  return (
    <Link to={to} className={`link text-center ${className}`}>
      {children}
    </Link>
  );
};

export default CustomLink;
