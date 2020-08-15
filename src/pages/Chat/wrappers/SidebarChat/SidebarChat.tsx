import React, { FC } from 'react';
import './style.scss';
import SidebarHeader from './SidebarHeader/SidebarHeader';

const SidebarChat: FC = ({ children }) => (
  <div className="sidebarChat">
    <SidebarHeader />
    {children}
  </div>
);

export default SidebarChat;
