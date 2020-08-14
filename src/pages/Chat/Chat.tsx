import React from 'react';
import ChatMessage from './components/ChatMessage/ChatMessage';
import Dialogs from './components/Dialogs/Dialogs';
import AudioMessage from './components/AudioMessage/AudioMessage';

const Chat = () => {
  return (
    <>
      {/* <Dialogs /> */}
      <ChatMessage />
      <ChatMessage right />
      <ChatMessage imgMessage />
      <ChatMessage typing />
      <ChatMessage audioMessage />
    </>
  );
};

export default Chat;
