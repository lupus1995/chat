import React, { FC, memo, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector, shallowEqual } from 'react-redux';
import { RootReducerInterface } from '../../../../../../root.reducer';
import ModalCloseButton from '../../../../../components/ModalCloseButton/ModalCloseButton';
import consts from '../../../../../resourse/consts';
import CreateDialogForm from './CreateDialogForm';

const CreateDialogs = memo(() => {
  const { toggleModalCreateDialog } = useSelector(
    (state: RootReducerInterface) => ({
      toggleModalCreateDialog: state.dialogs.dialogs.toggleModalCreateDialog,
    }),
    shallowEqual,
  );
  return (
    <Modal
      ariaHideApp={false}
      isOpen={toggleModalCreateDialog}
      style={consts.modalStyles}
      contentLabel="Example Modal"
    >
      <ModalCloseButton />
      <CreateDialogForm />
    </Modal>
  );
});

export default CreateDialogs;
