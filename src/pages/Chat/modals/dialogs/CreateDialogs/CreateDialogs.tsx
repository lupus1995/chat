import React, { memo } from 'react';
import Modal from 'react-modal';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { RootReducerInterface } from '../../../../../../root.reducer';
import ModalCloseButton from '../../../../../components/ModalCloseButton/ModalCloseButton';
import {
  setToggleModaEditDialog,
  setToggleModalCreateDialog,
} from '../../../../../redux/dialogs/dialogs/actions';
import consts from '../../../../../resourse/consts';
import CreateDialogForm from './CreateDialogForm';

const CreateDialogs = memo(() => {
  const dispatch = useDispatch();
  const { toggleModalCreateDialog, toggleModalEditdialog } = useSelector(
    (state: RootReducerInterface) => ({
      toggleModalCreateDialog: state.dialogs.dialogs.toggleModalCreateDialog,
      toggleModalEditdialog: state.dialogs.dialogs.toggleModalEditDialog,
    }),
    shallowEqual,
  );

  const handleClick = () => {
    dispatch(setToggleModalCreateDialog(false));
    dispatch(setToggleModaEditDialog(false));
  };

  return (
    <Modal
      ariaHideApp={false}
      isOpen={toggleModalCreateDialog || toggleModalEditdialog}
      style={consts.modalStyles}
      contentLabel="Example Modal"
    >
      <ModalCloseButton onClick={handleClick} />
      <CreateDialogForm />
    </Modal>
  );
});

export default CreateDialogs;
