import React, { FC, memo, useContext } from 'react';
import './style.scss';
import { useDispatch } from 'react-redux';
import icons from '../../resourse/icons';
import enabledBody from '../../helpers/enabledBody';
import {
  setToggleModaEditModalDialog,
  setToggleModalCreateDialog,
} from '../../redux/dialogs/dialogs/actions';

const ModalCloseButton = memo(() => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setToggleModalCreateDialog(false));
    dispatch(setToggleModaEditModalDialog(false));
    enabledBody();
  };
  return (
    <button onClick={handleClick} type="button" className="modalCloseButton">
      {icons.closeIcon}
    </button>
  );
});

export default ModalCloseButton;
