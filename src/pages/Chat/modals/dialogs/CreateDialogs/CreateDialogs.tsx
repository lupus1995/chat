import React, { FC, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import ModalCloseButton from '../../../../../components/ModalCloseButton/ModalCloseButton';
import consts from '../../../../../resourse/consts';
import { ModalWrapperContext } from '../../../../../wrappers/ModalWrapper/ModalWrapper';
import CreateDialogForm from './CreateDialogForm';

const CreateDialogs = () => {
  const { open, setOpen } = useContext(ModalWrapperContext);
  return (
    <Modal
      ariaHideApp={false}
      isOpen={open}
      style={consts.modalStyles}
      contentLabel="Example Modal"
    >
      <ModalCloseButton />
      <CreateDialogForm />
    </Modal>
  );
};

export default CreateDialogs;
