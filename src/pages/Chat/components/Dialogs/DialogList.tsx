import React from 'react';
import { useSelector } from 'react-redux';
import { RootReducerInterface } from '../../../../../root.reducer';
import DialogItem from './DialogItem';

const DialogList = () => {
  const { users } = useSelector((state: RootReducerInterface) => ({
    users: state.users.users,
  }));

  return (
    <>
      {users.length === 0 && <h2>Нет диалогов</h2>}
      {users.length > 0 &&
        users.map((item) => {
          return <DialogItem item={item} key={item.id} />;
        })}
    </>
  );
};

export default DialogList;
