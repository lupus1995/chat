import React, { FC, useContext, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { getTypesRequest } from '../../../../../redux/dialogs/types/actions';
import { getMembersRequest } from '../../../../../redux/users/actions';
import consts from '../../../../../resourse/consts';
import { FetchCancelContext } from '../../../../../wrappers/FetchCancel/FetchCancel';
import CreateDialogForm from './CreateDialogForm';

const CreateDialogs: FC<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { abortController } = useContext(FetchCancelContext);
  useEffect(() => {
    dispatch(getTypesRequest(abortController.signal));
    dispatch(
      getMembersRequest({
        id: '5fe251b307941833081e7f16',
        signal: abortController.signal,
      }),
    );
  }, []);
  return (
    <Modal
      ariaHideApp={false}
      isOpen={open}
      style={consts.modalStyles}
      contentLabel="Example Modal"
    >
      <CreateDialogForm />
    </Modal>
  );
};

export default CreateDialogs;
