import React, { FC } from 'react';
import './style.scss';

const AuthFormContent: FC = ({ children }) => (
  <div className="formContent">{children}</div>
);

export default AuthFormContent;
