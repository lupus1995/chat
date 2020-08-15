import React from 'react';
import ChatMessage from './components/ChatMessage/ChatMessage';
import Dialogs from './components/Dialogs/Dialogs';
import ChatWrapper from './wrappers/ChatWrapper/ChatWrapper';
import SidebarChat from './wrappers/SidebarChat/SidebarChat';

const Chat = () => {
  return (
    <ChatWrapper>
      <SidebarChat>
        <Dialogs />
      </SidebarChat>

      {/* <ChatMessage />
      <ChatMessage right />
      <ChatMessage imgMessage />
      <ChatMessage typing />
      <ChatMessage audioMessage /> */}
    </ChatWrapper>
  );
};

export default Chat;
