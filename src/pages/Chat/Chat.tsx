import React from 'react';
import ChatMessageLeft from './ChatMessage/ChatMessageLeft';

const Chat = () => {
  return (
    <>
      <ChatMessageLeft />
      <ChatMessageLeft right />
    </>
  );
};

export default Chat;
