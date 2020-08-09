import React from 'react';
import ChatMessage from './ChatMessage/ChatMessage';

const Chat = () => {
  return (
    <>
      <ChatMessage />
      <ChatMessage right />
      <ChatMessage imgMessage />
      <ChatMessage typing />
    </>
  );
};

export default Chat;
