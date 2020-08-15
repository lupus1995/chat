import React from 'react';
import './style.scss';

const SidebarSearch = () => (
  <div className="sidebarSearchContent">
    <input
      placeholder="Поиск среди контактов"
      type="text"
      className="sidebarSearchInput"
    />
  </div>
);

export default SidebarSearch;
