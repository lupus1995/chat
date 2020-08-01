import React, { FC } from 'react';
import './style.scss';

const MainAuthWrapper: FC = ({ children }) => (
  <main className="d-flex flex-direction-column justify-content-center authContent">
    {children}
  </main>
);

export default MainAuthWrapper;
