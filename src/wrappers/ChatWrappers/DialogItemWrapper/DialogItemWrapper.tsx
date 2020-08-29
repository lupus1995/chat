import React, { FC } from 'react';
import './style.scss';

const DialogItemWrapper: FC = ({ children }) => (
  <li className="d-flex align-items-center position-relative dialogItemWrapper">
    {children}
  </li>
);

export default DialogItemWrapper;
