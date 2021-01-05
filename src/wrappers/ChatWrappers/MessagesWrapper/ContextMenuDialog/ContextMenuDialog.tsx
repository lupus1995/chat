import React, { MutableRefObject, useRef, useState } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import icons from '../../../../resourse/icons';
import { setToggleModalCreateDialog } from '../../../../redux/dialogs/dialogs/actions';
import disableBody from '../../../../helpers/disableBody';

const ContextMenuDialog = (): JSX.Element => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);

  React.useEffect(() => {
    const handleClick = (e: any): void => {
      if (!ref || !ref.current) return;
      if (!ref.current.contains(e.target) && ref) {
        setShowMenu(false);
      }
    };
    document.addEventListener('click', handleClick);
    return (): void => document.removeEventListener('click', handleClick);
  });

  const handleClick = () => setShowMenu(!showMenu);
  const handleClcikEdit = () => {
    setShowMenu(!showMenu);
    dispatch(setToggleModalCreateDialog(true));
    disableBody();
  };

  return (
    <div ref={ref} className="contextMenuDialog">
      <button onClick={handleClick} className="contextMenuIcon" type="button">
        {icons.contextMenuDialog}
      </button>
      {showMenu && (
        <ul className="contextMenuContainer">
          <li>
            <button onClick={handleClcikEdit} type="button">
              Изменить
            </button>
          </li>
          <li>
            <button type="button">Удалить</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ContextMenuDialog;
