import React, { FC, memo } from 'react';
import './style.scss';
import icons from '../../resourse/icons';
import enabledBody from '../../helpers/enabledBody';

const ModalCloseButton: FC<{ onClick: () => void }> = memo(({ onClick }) => {
  const handleClick = () => {
    onClick();
    enabledBody();
  };
  return (
    <button onClick={handleClick} type="button" className="modalCloseButton">
      {icons.closeIcon}
    </button>
  );
});

export default ModalCloseButton;
