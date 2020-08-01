import React, { FC } from 'react';
import './style.scss';

const MessageError: FC<{ text: string }> = ({ text }) => (
  <span className="messageError">{text}</span>
);

export default MessageError;
