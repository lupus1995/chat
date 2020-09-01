import React, { FC } from 'react';
import './style.scss';

const DialogWrapper: FC = ({ children }) => (
  <section className="dialogWrapper">
    <ul className="dialogList">{children}</ul>
  </section>
);

export default DialogWrapper;
