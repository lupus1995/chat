import React, { lazy, Suspense } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootReducerInterface } from '../../root.reducer';

const DeleteDialog = lazy(
  () => import('../pages/Chat/modals/dialogs/DeleteDialog/DeleteDialog'),
);

const ModalDeleteDialog = () => {
  const { toggleModalDeleteDialog } = useSelector(
    (state: RootReducerInterface) => ({
      toggleModalDeleteDialog: state.dialogs.dialogs.toggleModalDeleteDialog,
    }),
    shallowEqual,
  );

  return (
    <>
      {toggleModalDeleteDialog && (
        <Suspense fallback={null}>
          <DeleteDialog />
        </Suspense>
      )}
    </>
  );
};

export default ModalDeleteDialog;
