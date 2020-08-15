import React, { FC } from 'react';
import './style.scss';
import icons from '../../../../../resourse/icons';

const SidebarHeader: FC = ({ children }) => (
  <div className="sidebarHeader">
    <div className="sidebarHeaderContent">
      <p className="sidebarHeaderTitle">
        {icons.users}
        <span>Список диалогов</span>
      </p>
      <button>{icons.createItem}</button>
    </div>
  </div>
);

export default SidebarHeader;
