import React, { useEffect, useContext } from 'react';
import ChatMessage from './components/ChatMessage/ChatMessage';
import Dialogs from './components/Dialogs/Dialogs';
import ChatWrapper from '../../wrappers/ChatWrappers/ChatWrapper/ChatWrapper';
import SidebarChat from '../../wrappers/ChatWrappers/SidebarChat/SidebarChat';
import MessageWrapper from '../../wrappers/ChatWrappers/MessagesWrapper/MessagesWrapper';
import { useDispatch } from 'react-redux';
import { FetchCancelContext } from '../../wrappers/FetchCancel/FetchCancel';
import { getMessagesRequest } from '../../redux/messages/action';

const Chat = () => {
  const { abortController } = useContext(FetchCancelContext);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('chat');
    dispatch(getMessagesRequest(abortController.signal));
  }, []);
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
