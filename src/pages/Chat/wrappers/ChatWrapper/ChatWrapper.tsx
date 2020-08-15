import React, { FC } from 'react';
import './style.scss';

const ChatWrapper: FC = ({ children }) => (
  <section className="chatWrapper">{children}</section>
);

export default ChatWrapper;
