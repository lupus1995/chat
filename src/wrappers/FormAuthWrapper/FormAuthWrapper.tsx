import React, { FC } from 'react';
import './style.scss';

const FormAuthWrapper: FC = ({ children }) => (
  <div className="formWrapper">{children}</div>
);

export default FormAuthWrapper;
