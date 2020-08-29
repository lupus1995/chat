import React, { FC } from 'react';
import './style.scss';
import SidebarHeader from './SidebarHeader/SidebarHeader';
import SidebarSearch from './SidebarSearch/SidebarSearch';

const SidebarChat: FC = ({ children }) => (
  <div className="sidebarChat">
    <SidebarHeader />
    <SidebarSearch />
    {children}
  </div>
);

export default SidebarChat;
