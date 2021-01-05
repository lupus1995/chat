import React, { FC, Suspense } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootReducerInterface } from '../../root.reducer';
import CreateDialogs from '../pages/Chat/modals/dialogs/CreateDialogs/CreateDialogs';

const ModalCreateDialog = (): JSX.Element => {
  const { toggleModalCreateDialog } = useSelector(
    (state: RootReducerInterface) => ({
      toggleModalCreateDialog: state.dialogs.dialogs.toggleModalCreateDialog,
    }),
    shallowEqual,
  );
  return (
    <>
      {toggleModalCreateDialog && (
        <Suspense fallback={null}>
          <CreateDialogs />
        </Suspense>
      )}
    </>
  );
};

export default ModalCreateDialog;
