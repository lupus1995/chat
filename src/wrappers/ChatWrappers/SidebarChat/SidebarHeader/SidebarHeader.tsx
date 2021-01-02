import React, { memo, useState } from 'react';
import './style.scss';
import icons from '../../../../resourse/icons';
import disableBody from '../../../../helpers/disableBody';
import enabledBody from '../../../../helpers/enabledBody';
import CreateDialogs from '../../../../pages/Chat/modals/dialogs/CreateDialogs/CreateDialogs';

const SidebarHeader = memo(
  (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const handleClick = () => {
      setOpen(!open);
      if (!open) {
        disableBody();
      } else {
        enabledBody();
      }
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
        <CreateDialogs open={open} setOpen={setOpen} />
      </div>
    );
  },
);

export default SidebarHeader;
