import React, { FC } from 'react';
import './style.scss';
import ChatTextarea from './ChatTextarea/ChatTextarea';

const MessageWrapper: FC = ({ children }) => {
  return (
    <section className="messageWrapper">
      <div className="messageWrapperTitle">
        <span className="messageWrapperName">Гай Юлий Цезарь</span>
        <span className="messageWrapperStatus">онлайн</span>
      </div>
      <div className="chatMessageContent">
        {children}
        <ChatTextarea />
      </div>
    </section>
  );
};

export default MessageWrapper;
