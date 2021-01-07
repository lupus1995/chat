import React, { FC, memo } from 'react';
import { Button } from 'styleguide-panfilov';
import './style.scss';

const ModalCloseButtons: FC<{
  handleClickDelete: () => void;
  handleClickCancel: () => void;
}> = memo(({ handleClickCancel, handleClickDelete }) => {
  return (
    <div className="modalCloseButtonsWrapper">
      <Button
        className="modalCloseButtons"
        onClick={handleClickDelete}
        primary
        type="button"
      >
        Удалить
      </Button>
      <Button
        className="modalCloseButtons"
        onClick={handleClickCancel}
        primary
        type="button"
      >
        Отмена
      </Button>
    </div>
  );
});

export default ModalCloseButtons;
