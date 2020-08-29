import React from 'react';
import ChatMessage from './components/ChatMessage/ChatMessage';
import Dialogs from './components/Dialogs/Dialogs';
import ChatWrapper from '../../wrappers/ChatWrappers/ChatWrapper/ChatWrapper';
import SidebarChat from '../../wrappers/ChatWrappers/SidebarChat/SidebarChat';
import MessageWrapper from '../../wrappers/ChatWrappers/MessagesWrapper/MessagesWrapper';

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
        <ChatMessage fileMessage />
      </MessageWrapper>
    </ChatWrapper>
  );
};

export default Chat;
