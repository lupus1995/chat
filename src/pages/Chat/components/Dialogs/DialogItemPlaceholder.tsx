import React from 'react';
import DialogItemWrapper from '../../../../wrappers/ChatWrappers/DialogItemWrapper/DialogItemWrapper';
import AvatarPlaceholder from '../../../../components/Avatar/AvatarPlaceholder';

const DialogItemPlaceholder = () => {
  return (
    <DialogItemWrapper dialog={null}>
      <div>
        <AvatarPlaceholder />
      </div>
      <div>
        <div className="placeholder dialogItemNamePlaceholder" />
        <div className="dialogItemMessagePlaceholder placeholder" />
      </div>
    </DialogItemWrapper>
  );
};

export default DialogItemPlaceholder;
