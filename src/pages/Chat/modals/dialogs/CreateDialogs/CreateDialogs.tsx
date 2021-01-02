import React, { FC } from 'react';
import Modal from 'react-modal';
import consts from '../../../../../resourse/consts';

const CreateDialogs: FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  return (
    <Modal
      isOpen={open}
      style={consts.modalStyles}
      contentLabel="Example Modal"
    >
      hfghdfghdfhdfghdfgh
    </Modal>
  );
};

export default CreateDialogs;
