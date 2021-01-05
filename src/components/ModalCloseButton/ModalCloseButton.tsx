import React, { FC, memo, useContext } from 'react';
import './style.scss';
import icons from '../../resourse/icons';
import enabledBody from '../../helpers/enabledBody';
import { ModalWrapperContext } from '../../wrappers/ModalWrapper/ModalWrapper';

const ModalCloseButton = memo(() => {
  const { setOpen } = useContext(ModalWrapperContext);
  const handleClick = () => {
    setOpen(false);
    enabledBody();
  };
  return (
    <button onClick={handleClick} type="button" className="modalCloseButton">
      {icons.closeIcon}
    </button>
  );
});

export default ModalCloseButton;
