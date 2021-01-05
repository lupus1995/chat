import classNames from 'classnames';
import React, { FC, memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '../../../../root.reducer';
import DialogsInterface from '../../../interfaces/dialogs/DialogsInterface';
import { setActiveDialog } from '../../../redux/dialogs/dialogs/actions';
import './style.scss';

const DialogItemWrapper: FC<{ dialog: DialogsInterface | null }> = memo(
  ({ children, dialog }) => {
    const { activeDialog } = useSelector(
      (state: RootReducerInterface) => ({
        activeDialog: state.dialogs.dialogs.activeDialog,
      }),
      shallowEqual,
    );
    const dispatch = useDispatch();
    const handleClick = () => {
      dispatch(setActiveDialog(dialog));
    };
    return (
      <li
        role="menuitem"
        onKeyPress={handleClick}
        onClick={handleClick}
        className={classNames(
          'd-flex align-items-center position-relative dialogItemWrapper',
          {
            dialogItemWrapperActive:
              dialog?.company.dialogId === activeDialog?.company.dialogId,
          },
        )}
      >
        {children}
      </li>
    );
  },
);

export default DialogItemWrapper;
