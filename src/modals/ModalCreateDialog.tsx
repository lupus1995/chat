import React, { FC, memo, Suspense } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { RootReducerInterface } from '../../root.reducer';
import CreateDialogs from '../pages/Chat/modals/dialogs/CreateDialogs/CreateDialogs';

const ModalCreateDialog = memo(
  (): JSX.Element => {
    const { toggleModalCreateDialog, toggleModalEditdialog } = useSelector(
      (state: RootReducerInterface) => ({
        toggleModalCreateDialog: state.dialogs.dialogs.toggleModalCreateDialog,
        toggleModalEditdialog: state.dialogs.dialogs.toggleModalEditDialog,
      }),
      shallowEqual,
    );
    return (
      <>
        {(toggleModalCreateDialog || toggleModalEditdialog) && (
          <Suspense fallback={null}>
            <CreateDialogs />
          </Suspense>
        )}
      </>
    );
  },
);

export default ModalCreateDialog;
