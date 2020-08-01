import React, { FC } from 'react';
import './style.scss';

const LinkAuthWrapper: FC = ({ children }) => (
  <div className="text-center linkAuth">{children}</div>
);

export default LinkAuthWrapper;
