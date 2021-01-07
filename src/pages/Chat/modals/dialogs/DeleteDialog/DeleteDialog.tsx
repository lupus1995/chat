import React, { memo, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { RootReducerInterface } from '../../../../../../root.reducer';
import consts from '../../../../../resourse/consts';
import ModalCloseButton from '../../../../../components/ModalCloseButton/ModalCloseButton';
import {
  deleteDialogRequest,
  setActiveDialog,
  setToggleModalDeleteDialog,
} from '../../../../../redux/dialogs/dialogs/actions';
import DeleteModalWrapper from '../../../../../wrappers/DeleteModalWrapper/DeleteModalWrapper';
import ModalCloseButtons from '../../../../../components/ModalCloseButtons/ModalCloseButtons';
import { FetchCancelContext } from '../../../../../wrappers/FetchCancel/FetchCancel';

const DeleteDialog = memo(() => {
  const { abortController, updateAbort } = useContext(FetchCancelContext);
  const dispatch = useDispatch();
  const {
    toggleModalDeleteDialog,
    activeDialog,

    deleteDialogSuccess,
  } = useSelector((state: RootReducerInterface) => ({
    toggleModalDeleteDialog: state.dialogs.dialogs.toggleModalDeleteDialog,
    activeDialog: state.dialogs.dialogs.activeDialog,

    deleteDialogSuccess: state.dialogs.dialogs.fetchData.deleteDialogSuccess,
  }));

  const handleClick = () => {
    dispatch(setToggleModalDeleteDialog(false));
    abortController.abort();
    updateAbort();
  };

  const handleClickDelete = () => {
    if (activeDialog) {
      dispatch(
        deleteDialogRequest({
          id: activeDialog?.company.dialogId,
          signal: abortController.signal,
        }),
      );
    }
  };

  useEffect(() => {
    if (deleteDialogSuccess) {
      handleClick();
      dispatch(setActiveDialog(null));
    }
  }, [deleteDialogSuccess]);

  return (
    <Modal
      ariaHideApp={false}
      isOpen={toggleModalDeleteDialog}
      style={consts.modalStyles}
      contentLabel="Example Modal"
    >
      <ModalCloseButton onClick={handleClick} />
      <DeleteModalWrapper
        text={`Вы действительно хотите удалить диалог с ${activeDialog?.company.fullname}`}
      />
      <ModalCloseButtons
        handleClickCancel={handleClick}
        handleClickDelete={handleClickDelete}
      />
    </Modal>
  );
});

export default DeleteDialog;
