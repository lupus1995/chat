import React from 'react';
import ChatMessage from './components/ChatMessage/ChatMessage';
import Dialogs from './components/Dialogs/Dialogs';
import ChatWrapper from './wrappers/ChatWrapper/ChatWrapper';
import SidebarChat from './wrappers/SidebarChat/SidebarChat';
import MessageWrapper from './wrappers/MessagesWrapper/MessagesWrapper';

const Chat = () => {
  return (
    <ChatWrapper>
      <SidebarChat>
        <Dialogs />
      </SidebarChat>
      <MessageWrapper>
        <ChatMessage />
        <ChatMessage right />
        <ChatMessage imgMessage />
        <ChatMessage typing />
        <ChatMessage audioMessage />
      </MessageWrapper>
    </ChatWrapper>
  );
};

export default Chat;
