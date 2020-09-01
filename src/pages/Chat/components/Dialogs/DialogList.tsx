import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerInterface } from '../../../../../root.reducer';
import DialogItem from './DialogItem';

const DialogList = () => {
  const { dialogs } = useSelector((state: RootReducerInterface) => ({
    dialogs: state.dialogs.dialogs,
  }));

  return (
    <>
      {dialogs.length === 0 && <h2>Нет диалогов</h2>}
      {dialogs.length > 0 &&
        dialogs.map((item) => {
          return <DialogItem item={item} key={item._id} />;
        })}
    </>
  );
};

export default DialogList;
