import React, { lazy, memo, Suspense, useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import icons from '../../../../resourse/icons';
import disableBody from '../../../../helpers/disableBody';
import { setToggleModalCreateDialog } from '../../../../redux/dialogs/dialogs/actions';

const SidebarHeader = memo(
  (): JSX.Element => {
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(setToggleModalCreateDialog(true));
      disableBody();
    };
    return (
      <div className="sidebarHeader">
        <div className="sidebarHeaderContent">
          <p className="sidebarHeaderTitle">
            {icons.users}
            <span>Список диалогов</span>
          </p>
          <button onClick={handleClick} type="button">
            {icons.createItem}
          </button>
        </div>
      </div>
    );
  },
);

export default SidebarHeader;
